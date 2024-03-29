const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const axios = require('axios');

router.get('/', asyncHandler(async(req, res) => {
    const userList = await User.find().select('name phone email'); // only display name, phone and email

    if(!userList){
        res.status(500).json({success: false});
        return
    }

    res.status(200).json(userList)
}))

router.get('/:id', asyncHandler(async(req,res) => {
    const user = await User.findById(req.params.id).select('-passwordHash'); // -passwordHash to not display passwordHash

    if(!user){
        res.status(404).json({error: 'The user with the given ID was not found'})
        return
    }

    res.status(200).json(user);
}))

router.post('/', asyncHandler(async(req, res) => {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
    })
    user = await user.save();

    if (!user){
        res.status(404).json({error: 'The user cannot be created'})
        return
    }
    
    res.status(201).json(user);
}))

router.put('/:id', asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(404).json({error: 'The user cannot be found'})
        return
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id, 
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            passwordHash: user.passwordHash,
            phone: req.body.phone,
            isAdmin: user.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
        },
        {new: true}
    )

    if(!updatedUser){
        res.status(404).json({error: 'The user cannot be updated'})
        return
    }
    res.status(200).json(updatedUser);
}));

router.post('/login', asyncHandler(async(req, res) => {
    const user = await User.findOne({email: req.body.email});
    const secret = process.env.JWT_SECRET;

    if(!user){
        res.status(400).json({error: 'The user was not found. Please try a different email'})
        return
    }

    if(user && bcrypt.compareSync(req.body.password, user.passwordHash)){
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            secret,
            {expiresIn: '1d'}
        )
        res.status(200).json({id: user._id, token: token})
    } else {
        res.status(400).json({error: 'Password is incorrect. Please try again'})
    }
}));

router.post('/register', asyncHandler(async(req, res) => {
    try{
        let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
        })
        user = await user.save();

        if (!user){
            res.status(400).json({error: 'The user cannot be created'})
            return
        }

        //create cart
        const cartResponse = await axios.post(`https://vektor-api.onrender.com/cart/${user._id}`)
        if(cartResponse.status !== 201){
            res.status(400).json({error: 'The cart cannot be created'})
            return
        }

        //create wishlist
        const wishlistResponse = await axios.post(`https://vektor-api.onrender.com/wishlist/${user._id}`)
        if(wishlistResponse.status !== 201){
            res.status(400).send({error: 'The wishlist cannot be created'})
            return
        }

        //generate jwt token
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign(
        {
            userId: user.id,
            isAdmin: user.isAdmin
        },
        secret,
        {expiresIn: '1d'}
    )
    
    res.status(201).json({id: user.id, token: token});
    }catch (err){
        res.status(400).json({error: err})
    }
}));

router.get('/get/count', asyncHandler(async(req, res) => {
    const userCount = await User.countDocuments();

    if(!userCount){
        res.status(500).json({success: false})
    }

    res.status(200).json({userCount: userCount});
}));

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id).then(user => {
        if(user){
            res.status(200).json({success: true, message: 'the user is deleted'})
        } else {
            res.status(404).json({success: false, message: 'user not found'})
        }
    }).catch(err => {
        res.status(400).json({success: false, error: err})
    })
});

module.exports = router;