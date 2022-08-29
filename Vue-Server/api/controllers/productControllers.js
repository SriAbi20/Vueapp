'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Products');
/*
exports.get_all_products = function(req,res){
    Product.find({},function (err,product){
        if(err)
        res.send(err);
        res.json(product);
    });
}

exports.create_product = function(req,res){
    var new_product = new Product(req.body);
    new_product.save(function(err,product){
        if(err){
            res.send(err);
            res.json(product);
        }
    });
};

exports.get_product = function(req,res){
    Product.findById(req.params.productId,function (err,product){
        if(err)
        res.send(err);
        res.json(product);
    });
};
*/

const db = require("../models/productModel");
const Product = db.Product;