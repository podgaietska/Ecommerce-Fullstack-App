const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const Category = require('../models/categoryModel');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.CLOUD_API_KEY;
const api_secret = process.env.CLOUD_API_SECR;

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
}

cloudinary.config({
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret: api_secret,
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      const fileName = file.originalname.split(' ').join('-'); // can also do .replace(' ', '-');
      const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
})

const uploadFilter = function(req, file, cb){
    const isValid = FILE_TYPE_MAP[file.mimetype];

        if(isValid){
            return cb(null, true);
        }
        req.fileValidationError = 'Invalid file type';
        return cb(null, false, req.fileValidationError);
}

const uploadOptions = multer({ storage: storage, fileFilter: uploadFilter })

router.get('/', asyncHandler(async(req, res) => {
    //localhost:3000/api/v1/products?categories=2342342,2342342
    let filter = {};
    if(req.query.categories){
        filter = {category: req.query.categories.split(',')}; //split to separate the ids
    }
                                            // can do category: ["2342342", "2342342"] if know specific catgories
    const productList = await Product.find(filter).populate('category') //select('name image -_id'); select allows to display only some atributes of product, -_id to remove id

    if(!productList){
        res.status(500).json({success: false})
    }

    res.status(200).json(productList);
}));

router.get('/:id', asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id).populate('category'); //populate allows to display the category details instead of id

    if(!product){
        res.status(404)
        throw new Error('The product with the given ID was not found')
    }

    res.status(200).json(product);
}));

router.post('/', uploadOptions.single('image'), asyncHandler(async (req, res) => {
    const category = await Category.findById(req.body.category);
    if(!category){
        res.status(400).send('Invalid category')
    }

    if(req.fileValidationError){
        res.status(400)
        throw new Error(req.fileValidationError)
    }

    const file = req.file;
    if(!file){
        res.status(400)
        throw new Error('No image in the request')
    }

    cloudinary.uploader.upload(file.path, async (error, result) => {
        if (error){
            res.status(500).json({success: false, message: error.message});
            return;
        }

        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            image: result.secure_url,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            isFeatured: req.body.isFeatured,
        });

        try{
            const newProduct = await product.save();
            if(!newProduct){
                res.status(500).json({success: false, message: 'The product cannot be created'})
            }
            res.status(201).json(newProduct);
        } catch(error){
            res.status(500).json({success: false, message: error.message})
        }
    })

    // let product = new Product({
    //     name: req.body.name,
    //     description: req.body.description,
    //     image: `${basePath}${fileName}`,
    //     brand: req.body.brand,
    //     price: req.body.price,
    //     category: req.body.category,
    //     countInStock: req.body.countInStock,
    //     isFeatured: req.body.isFeatured,
    // });

    // product = await product.save();

    // if(!product){
    //     res.status(500).json({success: false, message: 'The product cannot be created'})
    // }
    // res.status(201).json(product);
    
}));

router.put('/:id', asyncHandler(async(req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)){
        res.status(400).send('Invalid product id')
    }

    const category = await Category.findById(req.body.category);
    if(!category){
        res.status(400).send('Invalid category')
    }
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            isFeatured: req.body.isFeatured,
        }, 
        {new: true} //parameter to sqpecify that we want to return the updated object
    )
    if (!product){
        res.status(500).send('The product cannot be updated')
    }
    
    res.status(201).json(product);
}))

router.delete('/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id).then(product => {
        if(product){
            res.status(200).json({success: true, message: 'the product is deleted'})
        } else {
            res.status(404).json({success: false, message: 'product not found'})
        }
    }).catch(err => {
        res.status(400).json({success: false, error: err})
    })
})

router.get('/get/count', asyncHandler(async(req, res) => {
    const productCount = await Product.countDocuments();

    if(!productCount){
        res.status(500).json({success: false})
    }

    res.status(200).json({productCount: productCount});
}));

//:count to say how many featured products we want to return. can remove :count to return all featured products
router.get('/get/featured/:count', asyncHandler(async(req, res) => {
    const count = req.params.count ? req.params.count : 0;
    const products = await Product.find({isFeatured: true}).limit(+count); //+count to convert string to number

    if(!products){
        res.status(500).json({success: false})
    }

    res.status(200).json(products);
}));

// router.put('/gallery-images/:id', uploadOptions.array('images', 5), asyncHandler(async(req, res) => {
//     if(!mongoose.isValidObjectId(req.params.id)){
//         res.status(400).send('Invalid product id')
//     }

//     const files = req.files;

//     let imagesPaths = [];
//     const basePath = `${req.protocol}://${req.get('host')}/public/uploads`

//     if(!files){
//         res.status(400)
//         throw new Error('No image in the request')
//     }else {
//         files.map(file => {
//             imagesPaths.push(`${basePath}${file.filename}`)
//         })
//     }

//     console.log(imagesPaths);

//     const product = await Product.findByIdAndUpdate(
//         req.params.id,
//         {
//             images: imagesPaths
//         }, 
//         {new: true} //parameter to sqpecify that we want to return the updated object
//     )

//     if (!product){
//         res.status(500).send('The product gallery cannot be updated')
//     }
    
//     res.status(201).json(product);
// }));

module.exports = router;