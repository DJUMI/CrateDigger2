const Product = require('../src/models/Product');

exports.getProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            res.status(200).json({ message: 'Fetched products successfully.', products: products });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.prodId;
    Product.findById(prodId)
        .then(product => {
            if (!product) {
                const error = new Error('Could not find product');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({ message: 'Product fetched.', product: product });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}