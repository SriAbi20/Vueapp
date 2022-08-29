import express from 'express';
import { request } from 'http';

'use strict';
module.exports = function(app){
    var products = require('../controllers/productControllers');
    app.route('/products').get(productList.get_all_products).post(productList.create_product);
    app.route('products/:productId').get(productList.read_a_user);
}