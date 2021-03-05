var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var path = require('path');
var CheckoutRoutes = express.Router();

CheckoutRoutes.get('/',function(req,res){
db.orders.findAll()
.then(function (user){
    console.log(user);
    res.render(user);
})

})
                                            
    
  



module.exports = {"CheckoutRoutes" : CheckoutRoutes};