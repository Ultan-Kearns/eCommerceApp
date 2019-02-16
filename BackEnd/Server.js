var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://Emart:G00343745@ds113375.mlab.com:13375/ecommerceapp';
var Schema = mongoose.Schema;
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
app.get('/api/user', function (req, res) {
    //test
  console.log(req.body.id)
  console.log(req.body.name)
  console.log(req.body.age)
  res.status(200).send("users  works")

})
app.get('/api/order', function (req, res) {
    //test
  console.log(req.body.id)
  console.log(req.body.name)
  res.status(200).send("orders works")
})
app.get('/api/review', function (req, res) {
  //test
  console.log(req.body.id)
  console.log(req.body.name)
  res.status(200).send("review works")
})
//schema goes below
var Schema = mongoose.Schema

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
	Id: {type: Number, default: 0},
	dateCreated: {type: Date, default: Date.now},
	content: {type: String, default: 'Blank'},
	//leave default at 0 as 0 will indicate no review left
	rating: {type: Number, default: 0},
})
//send response 200 to show it is connected
app.get('/', function (req, res) {
    res.send(200, 'Server works');
})
//have server listening at port 8081
var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
