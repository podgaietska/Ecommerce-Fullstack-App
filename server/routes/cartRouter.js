const express = require('express');
const router = express.Router();
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

router.get('/:id', async(req, res) => {
    const cart = await Cart.findOne({user: req.params.id})

    if(!cart){
        res.status(500).json({error: "Could not fetch user's cart"})
        return
    }

    const cartItems = await Promise.all(cart.cartItems.map(async (cartItem) => {
        const product = await Product.findById(cartItem);
        return product;
    }))

    res.json(cartItems)
})

//will create a new cart for a user on registration
router.post('/:id', asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);
    //validate user exists
    if(!user){
        res.status(400).json({error: 'Invalid user'})
    }
    //validate that user doesn't have cart already
    const usedCart = await Cart.findOne({user: req.params.id})
    if(usedCart){
        res.status(400).json({error: 'A cart for this user already exists'})
        return
    }else{
        let cart = new Cart({
            user: req.params.id,
            cartItems: [],
            totalPrice: 0,
        })
    
        cart = await cart.save();
    
        if(!cart){
            res.status(500).json({error: 'The cart cannot be created'})
            return
        }
        res.status(201).json(cart.cartItems);
    }
}))

router.put('/:id', asyncHandler(async(req, res) => {
    //validate cart exists
    const usedCart = await Cart.findOne({user: req.params.id})
    if(!usedCart){
        res.status(400).json({error: 'Could not find a cart for this user'})
        return
    }

    const totalPrices = await Promise.all(req.body.cartItems.map(async (cartItem) => {
        const product = await Product.findById(cartItem);
        const totalPrice = product.price;
        return totalPrice;
    }))

    const totalPrice = totalPrices.reduce((a, b) => a+b, 0);

    const cart = await Cart.findOneAndUpdate({user: req.params.id}, 
        {
            user: req.params.id,
            cartItems: req.body.cartItems,
            totalPrice: totalPrice,
        }, 
        {new: true} //parameter to sqpecify that we want to return the updated object
    )

    if (!cart){
        res.status(404).json({error: 'The cart for this user does not exist'})
        return
    }
    res.status(201).json(cart.cartItems);
}))

module.exports = router;