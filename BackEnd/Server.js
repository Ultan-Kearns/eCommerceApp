var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://G00345608:sh@rds3939@ds113375.mlab.com:13375/ecommerceapp';
mongoose.connect(mongoDB);
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//left in cross origin for firefox
app.use(function (req, res, next) {
    //to allow cross origin requests
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//schema goes below
var Schema = mongoose.Schema

//define order schema
var orderSchema = new Schema({
  Id: { type: Number, default: 1 },
  name: { type: String, default: 'guest' },
  address: { type: String, min: 18, index: true },
  dateCreated: { type: Date, default: Date.now },
  price: {type:Number, default: 0},
})
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
