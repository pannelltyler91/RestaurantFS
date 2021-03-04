var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var router = require('router')
// specific mount path for css/javascript specific files to work. 
app.use('/required', express.static('required'));
//connects Account and Home Routes. 
var AccountRoutes = require('./controllers/account_controller');
var HomeRoutes = require('./controllers/home_controller');
var OrderRoutes = require('./controllers/checkout_controller');


var port = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
// uses the 'accounts' routes respectively.
app.use('/',AccountRoutes.AccountRoutes);
// This middleware should check to make sure if a user is logged in when first open page. If not redirects to login page. 
app.use(function(req,res,next){
    if(req.session.email == null || req.session.email.length ==0 ){
        res.redirect('/login'); 
    }
    else{
      next();
    }
  });
  app.use('/',HomeRoutes.HomeRoutes);
// Order Routes. 
 app.use('/',OrderRoutes.OrderRoutes);


  app.listen(port, () => {
    console.log(`App listening on PORT ${port}`);
  });