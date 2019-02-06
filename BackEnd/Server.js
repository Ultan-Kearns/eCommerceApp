var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://G00345608:sh@rds3939@ds113375.mlab.com:13375/ecommerceapp';
mongoose.connect(mongoDB);

//schema goes below
var Schema = mongoose.Schema

//define order schema

//define user schema 
var userSchema = new Schema({
  Id: { type: Number, default: 1 },
  name: { type: String, default: 'guest' },
  age: { type: Number, min: 18, index: true },
  dateCreated: { type: Date, default: Date.now },
})

//define order schema 


//define review schema
var reviewSchema = new Schema({

})
