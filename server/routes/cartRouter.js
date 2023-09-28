const express = require('express');
const router = express.Router();
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

router.get('/:id', async(req, res) => {
    const cart = await Cart.findOne({user: req.params.id})
    .populate('user', 'name')
    .populate('cartItems', 'name price');

    if(!cart){
        res.status(500).json({success: false})
    }

    res.send(cart)
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
    }else{
        let cart = new Cart({
            user: req.params.id,
            cartItems: [],
            totalPrice: 0,
        })
    
        cart = await cart.save();
    
        if(!cart){
            res.status(500).json({success: false, message: 'The cart cannot be created'})
        }
        res.status(201).json(cart);
    }
}))

router.put('/:id', asyncHandler(async(req, res) => {
    //validate cart exists
    const usedCart = await Cart.findOne({user: req.params.id})
    if(!usedCart){
        res.status(400).json({error: 'A cart for this user already exists'})
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
    .populate('user', 'name')
    .populate('cartItems', 'name price');

    if (!cart){
        res.status(404).send('The cart does not exist')
    }
    res.status(201).json(cart);
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