const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel');
const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async(req, res) => {
    const categoryList = await Category.find();

    if(!categoryList){
        res.status(500).json({success: false})
    }

    res.status(200).json(categoryList)
}))

router.get('/:id', asyncHandler(async(req,res) => {
    const category = await Category.findById(req.params.id);

    if(!category){
        res.status(500).json({success: false, message:'The category with the given ID was not found'})
    }
    res.status(200).json(category);
}))

router.post('/', asyncHandler(async(req, res) => {
    let category = new Category({
        name: req.body.name,
    })
    
    category = await category.save();

    if (!category){
        res.status(404).send('The category cannot be created')
    }
    
    res.status(201).json(category);
}))

router.put('/:id', asyncHandler(async(req, res) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
        }, 
        {new: true} //parameter to sqpecify that we want to return the updated object
    )
    if (!category){
        res.status(404).send('The category cannot be created')
    }
    
    res.status(201).json(category);
}))

router.delete('/:id', (req, res) => {
    Category.findByIdAndRemove(req.params.id).then(category => {
        if(category){
            res.status(200).json({success: true, message: 'the category is deleted'})
        } else {
            res.status(404).json({success: false, message: 'category not found'})
        }
    }).catch(err => {
        res.status(400).json({success: false, error: err})
    })
})

module.exports = router;