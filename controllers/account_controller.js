var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var path = require('path');
var session = require('express-session');
var models = require('../models');
var Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

var accountRoutes = express.Router();
// All Account routes 
//Login Route
accountRoutes.get('/login',function(req,res){
    res.render('account/login');
});
//Register Route
accountRoutes.get('/register',function(req,res){  
    res.render('account/register',{errors: ""});
});
// Post route to handle registers action and its errors. 
accountRoutes.post('/register',function(req,res){
    var matched_users_promise = models.User.findAll({
        where:  Sequelize.or(
                {username: req.body.username},
                {email: req.body.email}
            )
    });
    matched_users_promise.then(function(users){ 
        // renders home page if correct
        if(users.length == 0){
            const passwordHash = bcrypt.hashSync(req.body.password,10);
            models.User.create({
                username: req.body.username,
                email: req.body.email,
                password: passwordHash
            }).then(function(){
                let newSession = req.session;
                newSession.email = req.body.email;
                res.redirect('/');
            });
        }
        // re renders register page with error if found duplicate
        else{
        
            res.render('account/register',{errors: "Username or Email already in user"});
        }
    })
});
// Post route handles login action and its errors. 
accountRoutes.post('/login',function(req,res){
    var matched_users_promise = models.User.findAll({
        where: Sequelize.and(
            {email: req.body.email},
        )
    });
    matched_users_promise.then(function(users){ 
        // renders home page if password hash and email matches 
        if(users.length > 0){
            let user = users[0];
            let passwordHash = user.password;
            if(bcrypt.compareSync(req.body.password,passwordHash)){
                req.session.email = req.body.email;
                res.redirect('/');
            }
            // Right username  Wrong password redirects you to register page. *I need To fix*
            else{
                res.redirect('/register');
            }
        }
        // if username is wrong re renders login page. *need to make error message*
        else{
            res.redirect('/login');
        }
    });
});
// makes the routes accesible in server.js
module.exports = {"AccountRoutes" : accountRoutes};