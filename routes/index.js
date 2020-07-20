const express = require('express')
const app = express.Router()

const productsController = require('../controllers/products')

app.get('/products', (req, res) => {
    productsController.getProducts()
        .then(products => {
            res.status(200).json({ products: products })
        })
        .catch(err => {
            res.status(500).send({ message:'Error al listar los productos' })
        })
})

app.get('/product/:id', (req, res) => {
    let id = req.params.id
    productsController.getProduct(id)
        .then (product => {
            if(!product) {
                res.status(500).send({ message:'No existe el producto' })
                return
            }
            res.status(200).json({ product: product })
        })
        .catch(err => {
            res.status(500).send({ message:'Error al listar el producto' })
        })
})

app.post('/product', (req, res) => {
    let setProduct = req.body
    productsController.createProduct(setProduct)
        .then(newProduct => {
            res.status(201).json({newProduct: newProduct})
        })
        .catch (err => {
            res.status(500).send({ message:'Error al crear el producto' })
        })

})

app.put('/product/:id', (req, res) => {
    let id = req.params.id
    let setProduct = req.body
    productsController.updateProduct(id, setProduct)
        .then(updateProduct => {
            if(!updateProduct) {
                res.status(500).send({ message:'No existe el producto para actualizar' })
                return
            }
            res.status(200).json({updateProduct})
        })
        .catch (err => {
            res.status(500).send({ message:'Error al actualizar el producto' })
        })

})

app.delete('/product/:id', (req, res) => {
    let id = req.params.id
    productsController.deleteProduct(id)
        .then(deleteProduct => {
            if(!deleteProduct) {
                res.status(500).send({ message:'No existe el producto a eliminar' })
                return
            }
            res.status(200).json({deleteProduct})
        })
        .catch (err => {
            res.status(500).send({ message:'Error al eliminar el producto' })
        })

})

module.exports = app