const express = require('express');
const mongoose = require('mongoose');
const Product = mongoose.model('Product');



const router = express.Router();

// GET /shop/products
router.get('/products', async (req, res, next) => {
    const products = await Product.find({ status: 'For Sale' });
    console.log(req);
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