const Product = require('../models/products')

function getProduct (id) {
    return Product.findById(id)
}

function getProducts (id) {
    return Product.find({})
}

function createProduct (product) {
    return new Product({...product}).save()
}

function updateProduct (id, product) {
    return Product.findByIdAndUpdate(id, {...product})
}

function deleteProduct (id) {
    return Product.findByIdAndDelete(id)
    
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}