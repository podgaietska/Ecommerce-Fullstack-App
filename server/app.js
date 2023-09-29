const express = require('express');
const connectDb = require('./config/dbConnection');
const app = express();
require('dotenv/config');
const morgan = require('morgan');
const cors = require('cors');
const authJwt = require('./middleware/jwt');
const errorHandler = require('./middleware/errorHandler');

const corsOptions = {
    origin: "https://illustrious-pony-215af5.netlify.app"
}
app.use(cors(corsOptions));

//middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError'){
        res.status(401).json({message: "Unauthorized"})
    }
    else if (err.name === 'ValidationError'){
        res.status(401).json({message: err})
    }
    else{
        res.status(500).json({message: err})
    }
})

//routers
const productRouter = require('./routes/productsRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const ordersRouter = require('./routes/ordersRouter');
const usersRouter = require('./routes/usersRouter');
const cartRouter = require('./routes/cartRouter');
const wishlistRouter = require('./routes/wishlistRouter');

app.use('/products', productRouter);
app.use('/categories', categoriesRouter);
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);
app.use('/cart', cartRouter);
app.use('/wishlist', wishlistRouter);

app.use(errorHandler);

app.get('/', (req,res) => {
    res.status(201).json({success: "Backend is running"});
})

//connection
connectDb();   

app.listen(8000, () => {
    console.log(url);
    console.log("Server is running on port 8000");
});