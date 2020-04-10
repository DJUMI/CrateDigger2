const express = require('express');
const mongoose = require('mongoose');
const Product = mongoose.model('Product');



const router = express.Router();

// GET /shop/products
router.get('/products', async (req, res, next) => {
    console.log(req.query);
    const products = await Product.find().sort({ listing_id: -1 }).limit(20);
    res.send(products);

});

// GET /shop/products/:prodID
router.get('/products/:prodId', async (req, res, next) => {

    const prodId = req.params.prodId;
    const product = await Product.find({ listing_id: prodId });
    if (!product) {
        console.log("Could not find product");
    }
    res.send(product);
});

module.exports = router;