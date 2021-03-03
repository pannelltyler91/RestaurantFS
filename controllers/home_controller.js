var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var path = require('path');
var HomeRoutes = express.Router();

var correct_path = path.join(__dirname+'/../views/home/');
// classic get route adds in extra fluff to be able to show the email in the home page. 
HomeRoutes.get('/',function(req,res){
    var menu = [];
    let email = req.session.email;
    res.render('home/index',{
        user_email: email,
        menu: menu
    });
});
// makes this route accesible in the server.js 
module.exports = {"HomeRoutes" : HomeRoutes};