// routers/productRouter.js
const express = require('express');


const Product = require('../models/product');

const router = express.Router();


// GET /products
router.get('/products', function(req, res){
   console.log('/products called');
    Product.getAllCB(function callback(err, products){
        console.log('/products callback with result ');
        // async call back
        if (err) {
            return res.status(500)
                .json({error: err})
        } 

        res.json(products);
    })

    console.log('/products exit');
 

});

// get single product
// GET /products/1234
router.get('/products/:id', function(req, res){
    res.json({id: req.params.id});
});

// create new resource

// POST /products
// headers
// {{payload as json }} - body
router.post('/products', function(req, res){
    console.log('mynext params', req.myNextParams)
    console.log("Client data ", req.body);
    res.json({result: true});
})

// update existing resource
// PUT /products/1234
router.put('/products/:id', function(req, res){
    res.json({result: true, id: req.params.id});
})


// delete existing resource
// DELETE /products/1234
router.delete('/products/:id', function(req, res){
    res.json({result: true, id: req.params.id});
})


module.exports = router;