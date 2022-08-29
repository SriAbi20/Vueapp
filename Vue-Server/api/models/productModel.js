'use strict';
var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var productSchema = new Schema({
    name:{type:String,required:true,unique:true},
    image:{type:String,required:true},
    price:{type:String,required:true},
    qty:{type:String,required:true},
    info:{type:String,required:true},
},{timestamps:true});

module.exports = mongoose.model('Products',productSchema);