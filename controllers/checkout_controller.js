var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var path = require('path');
var CheckoutRoutes = express.Router();

CheckoutRoutes.get('/',function(req,res){

                                            
    
    res.send('home/index',{
        user_email: email, 
        menu:menu
    

    
    });
});


module.exports = {"CheckoutRoutes" : CheckoutRoutes};