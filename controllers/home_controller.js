var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var path = require('path');
const db = require('../models')
var HomeRoutes = express.Router();

var correct_path = path.join(__dirname+'/../views/home/');
// classic get route adds in extra fluff to be able to show the email in the home page. also adds in menu items.
HomeRoutes.get('/',function(req,res){

    var menu =
    [{name:'Sailor Moon Parfait',price:'500'},
              {name:'Kon Dome Cake',price:'1500'},
            {name:'Totoro Tarts',price:'200'},
            {name:'Dragon Ball Cake Pops', price:'450'},
            {name:'Pokeball Macarons',price:'1000'}];                                         
    let email = req.session.email;
    res.render('home/index',{
        user_email: email, 
        menu:menu
    

    
    });
});
// Post route for orders and renders checkout page. 
HomeRoutes.post('/order', (req,res) => {
    db.orders.create({
        item1: req.body.menuItem1, 
        item2:req.body.menuItem2,
        item3:req.body.menuItem3,
        item4:req.body.menuItem4,
        item5:req.body.menuItem5,
        totalPrice:parseInt(req.body.price1)+parseInt(req.body.price2)+ parseInt(req.body.price3)+parseInt(req.body.price4)+parseInt(req.body.price5)
        
      }).then(function(order){
          console.log(order);
          res.render('checkout/checkout.ejs');
      });
    })
// confirmation page routes.     
HomeRoutes.get('/done', (req,res) => {
    let email = req.session.email;
    res.render('checkout/confirmation.ejs', {
        user_email: email
    });
})


// makes this route accesible in the server.js 
module.exports = {"HomeRoutes" : HomeRoutes};