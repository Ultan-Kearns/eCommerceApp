var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://emart:G00343745@ds113375.mlab.com:13375/ecommerceapp';
var Schema = mongoose.Schema;
var router = express.Router();
mongoose.connect(mongoDB);
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
  extended: false
}));
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

//define order scheema
var orderSchema = new Schema({
  id: { type: Number, default: 1 },
  name: { type: String, default: 'guest' },
  address: { type: String, min: 18, index: true },
  dateCreated: { type: String, default: "2018-09-01" },
  price: { type: Number, default: 0 },
})

var cartSchema = new Schema({
  id: {type: Number, default:1},
  itemID:{type: Number},
  price: {type: Number, default:1},
  dateCreated: {type: String, default: "2018-09-01" },
  userID:{type:String}
})

//define user schema 
var userSchema = new Schema({
  age: { type: Number, min: 18, index: true },
  name: { type: String, default: 'guest' },
  email:{type:String},
  address:{type:String},
  password:{type:String},
  dateCreated: { type: Date, default: Date.now },
  _id:{type:String},
  cardNumber:{type:String}
},{"_id":false})
//define review schema
var reviewSchema = new Schema({
  Id: { type: Number, default: 0 },
  dateCreated: { type: Date, default: Date.now },
  content: { type: String, default: 'Blank' },
  //leave default at 0 as 0 will indicate no review left
  rating: { type: Number, default: 0 },
},{"_id": Number})
var itemSchema = new Schema({
  item:{type: Number, default:2},
  price:{type: Number, default: 10},
  name:{type: String, default: 'undefined'},
  category:{type: String, default: 'Miscellaneous'},
  rating:{type: Number, default: 3},
})
var bugSchema = new Schema({
  subject:{type:String,default:''},
  issue:{type:String,default:''}
})
//define models for retrieval from DB
var reviewModel = mongoose.model('reviews', reviewSchema);
var orderModel = mongoose.model('orders', orderSchema);
var userModel = mongoose.model('users', userSchema);
var itemModel = mongoose.model('items',itemSchema);
var bugModel = mongoose.model('bugs',bugSchema);
var cartModel = mongoose.model('cart',cartSchema);
//send response 200 to show it is connected
app.get('/', function(req, res) {
  res.status(200).send('Server works');
})
//retrieve items
app.get('/api/users', function(req, res) {
  userModel.find(function(err, data) {
    res.json(data);
  });
//retrive cart orders.
app.get('api/cart',function(req,res){
  cartModel.find(function(err,data){
    res.json(data);
  });
});
})
app.get('/api/orders', function(req, res) {
  orderModel.find(function(err, data) {
    res.json(data);
  });
})
app.get('/api/reviews', function(req, res) {
  reviewModel.find(function(err, data) {
    console.log("REVIEW")
    res.json(data);
  });
})
app.get('/api/items', function(req, res) {
  itemModel.find(function(err, data) {
    res.json(data);
  });
}) 
app.get('/api/items/:id', function(req, res) {
    itemModel.find(req.params.item,
      function(err,data){
        if(err)
          res.status(500,"Error " + err)
        else
          res.json(data)

      })
  });
app.get('/api/users/:id', function(req, res,next) {
  console.log("Retrieving ID")
  userModel.findById(req.params.id,
    function(err, data) {
      if(data == null)
        res.status(404,"User not found",err);
else if(data.email == req.params.id){
var nodemailer = require('nodemailer');
var mail = data.email;
console.log(mail);
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    //login
    user: 'angularproject19@gmail.com',
    pass: 'sh@rds3939'
  }
});
var mailOptions = {
  //this sets up mail options
  from: 'angularproject19@gmail.com',
  to: mail,
  subject: 'Forgot E-mart password',
  text: 'Your password is: ' + data.password
};
//send response and log errors if any
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + data.email);
  }
});
res.status(200).send("email sent" +  data.email); 
}
else {
              console.log("error")
            res.json("error")
            res.status(404,"User not found")
          }
  })
});

app.get('/api/users/:id/:password', function(req, res) {
  userModel.findById(req.params.id,
    function(err, data) {
  console.log("inside")
       if(err){
          res.status(500,"Error " + err)
        }
        else if(data != null)
        {
          //compare user params to params in DB
          if(req.params.id == data.id && data.password == req.params.password)
          {
            console.log("equals")
              res.json(data);
          }
          else{
            console.log("error")
            res.json("error")
            res.status(404,"User not found")
          }
        }
          }
      )
  }
);
app.get('/api/bugs/', function(req, res) {
  bugModel.find(function(err, data) {
    res.json(data);
  });
})
app.post('/api/bugs',function(req,res)
{
  bugModel.create({
      subject: req.body.subject,
      issue:req.body.issue,
      _id:req.body.id
    });
    res.status(201).send("Bug added");
})
app.post('/api/users',function(req,res,next)
{
  userModel.create({
    age:req.body.age,
    name: req.body.name,
    email:req.body.email,
    address:req.body.address,
    password:req.body.password,
    _id:req.body._id,
    cardNumber:req.body.cardNumber
    });
    res.status(201).send("user added");
})
router.get('/get-data', function(req, res, next) {

});



//have server listening at port  8081
var server = app.listen(8081, function() {
var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})