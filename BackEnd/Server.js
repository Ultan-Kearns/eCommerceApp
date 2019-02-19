var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://emart:G00343745@ds113375.mlab.com:13375/ecommerceapp';
var Schema = mongoose.Schema;
mongoose.connect(mongoDB);
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
  extended: false
}));
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

//define order schema
var orderSchema = new Schema({
  id: { type: Number, default: 1 },
  name: { type: String, default: 'guest' },
  address: { type: String, min: 18, index: true },
  dateCreated: { type: Date, default: Date.now },
  price: {type:Number, default: 0},
})
//define user schema 
var userSchema = new Schema({
  id: { type: Number, default: 1 },
  name: { type: String, default: 'guest' },
  age: { type: Number, min: 18, index: true },
  dateCreated: { type: Date, default: Date.now },
})
//define review schema
var reviewSchema = new Schema({
	id: {type: Number, default: 0},
	dateCreated: {type: Date, default: Date.now},
	content: {type: String, default: 'Blank'},
	//leave default at 0 as 0 will indicate no review left
	rating: {type: Number, default: 0},
})
var itemSchema = new Schema({
  id:{type: Number, default:0},
  price:{type: Number, default: 10},
  name:{type: String, default: 'undefined'},
  category:{type: String, default: 'Miscellaneous'},
  rating:{type: Number, default: 3}
})
//define models
var reviewModel = mongoose.model('reviews', reviewSchema);
var orderModel = mongoose.model('orders', orderSchema);
var userModel = mongoose.model('users', userSchema);
var itemModel = mongoose.model('items',itemSchema)
//send response 200 to show it is connected
app.get('/', function(req, res) {
  res.status(200).send('Server works');
})

app.get('/api/users', function(req, res) {
  //test
  userModel.find(function(err, data) {
    res.json(data);
  });
})
app.get('/api/orders', function(req, res) {
  //test
  orderModel.find(function(err, data) {
    res.json(data);
  });
})
app.get('/api/reviews', function(req, res) {
  //test
  reviewModel.find(function(err, data) {
    res.json(data);
  });
})
app.get('/api/items', function(req, res) {
  //test
  itemModel.find(function(err, data) {
    res.json(data);
  });
})
//have server listening at port 8081
var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
