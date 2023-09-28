const express = require('express');
const router = express.Router();
const Wishlist = require('../models/wishlistModel');
const Product = require('../models/productModel');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

router.get('/:id', async(req, res) => {
    const wishlist = await Wishlist.findOne({user: req.params.id})

    if(!wishlist){
        res.status(500).json({success: false})
        throw new Error('Wishlist not found')
    }

    const wishlistItems = await Promise.all(wishlist.wishlistItems.map(async (wishlistItem) => {
        const product = await Product.findById(wishlistItem);
        return product;
    }))

    res.send(wishlistItems)
})

//will create a new wishlist for a user on registration
router.post('/:id', asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);
    //validate user exists
    if(!user){
        res.status(400).json({error: 'Invalid user'})
        throw new Error('Invalid user')
    }
    //validate that user doesn't have cart already
    const usedWishlist = await Wishlist.findOne({user: req.params.id})
    if(usedWishlist){
        res.status(400).json({error: 'A wishlist for this user already exists'})
        throw new Error('Wishlist for this user already exists')
    } else{
        let wishlist = new Wishlist({
            user: req.params.id,
            wishlistItems: [],
        })
    
        wishlist = await wishlist.save();
    
        if(!wishlist){
            res.status(500).json({success: false, message: 'The wishlist cannot be created'})
        }
        res.status(201).json(wishlist.wishlistItems);
    }
}))

router.put('/:id', asyncHandler(async(req, res) => {
    //validate cart exists
    const usedWishlist = await Wishlist.findOne({user: req.params.id})
    if(!usedWishlist){
        res.status(400).json({error: 'A cart for this user already exists'})
        throw new Error('A wishlist for this user was not found')
    }

    const wishlist = await Wishlist.findOneAndUpdate({user: req.params.id}, 
        {
            user: req.params.id,
            wishlistItems: req.body.wishlistItems,
        }, 
        {new: true} //parameter to sqpecify that we want to return the updated object
    )

    if (!wishlist){
        res.status(404).send('The cart does not exist')
    }
    res.status(201).json(wishlist.wishlistItems);
}))

router.delete('/:id', (req, res) => {
    Order.findByIdAndRemove(req.params.id).then( async order => {
        if(order){
            await order.orderItems.map(async orderItem => {
                await OrderItem.findByIdAndRemove(orderItem)
            })
            res.status(200).json({success: true, message: 'the order is deleted'})
        } else {
            res.status(404).json({success: false, message: 'order not found'})
        }
    }).catch(err => {
        res.status(400).json({success: false, error: err})
    })
})

module.exports = router;