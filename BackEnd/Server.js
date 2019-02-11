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
app.use(function(req, res, next) {
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
  id: { type: Number, default: 1 },
  name: { type: String, default: 'guest' },
  address: { type: String, min: 18, index: true },
  dateCreated: { type: Date, default: Date.now },
  price: { type: Number, default: 0 },
})

//define order model
var orderModel = mongoose.model('order', orderSchema);

//define user schema 
var userSchema = new Schema({
  Id: { type: Number, default: 1 },
  name: { type: String, default: 'guest' },
  age: { type: Number, min: 18, index: true },
  dateCreated: { type: Date, default: Date.now },
})

//define user model
var userModel = mongoose.model('user', userSchema);

//define review schema
var reviewSchema = new Schema({
  Id: { type: Number, default: 0 },
  dateCreated: { type: Date, default: Date.now },
  content: { type: String, default: 'Blank' },
  //leave default at 0 as 0 will indicate no review left
  rating: { type: Number, default: 0 },
})

//define review model
var reviewModel = mongoose.model('review', reviewSchema);

//define server variable

var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port

  console.log("This is listening at http://%s:%s", host, port)
})
