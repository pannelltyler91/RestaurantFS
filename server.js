const express = require("express");
const app = express();
//connects to data base. 
// const db = require('./models');
const pbkdf2 = require('pbkdf2');
const crypto = require('crypto');
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));
const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.use(session({
    secret:'notHappyAvian',
    resave:true,
    savUninitialized:true,
    cookie:{maxAge:60*60*1000}

}))

//function that encrypts passwords
function encryptPassword(password,pass_salt){
    var salt = pass_salt ? pass_salt: crypto.randomBytes(20).toString('hex');
    var key = pbkdf2.pbkdf2Sync(
        passowrd,salt,36000,256,'sha256'
    );

    var hash = key.toString('hex');
    return `$${salt}$${hash}`;
}

//home page rendering
app.get('/', (req,res)=>{
    res.render("home", {
        partials: {
            head: "/partials/head",
        },
    });

});

//create a new User
app.post('/newUser',(req,res)=>{

})

//login for existing users and redirect to order page
app.post('/login',(req,res)=>{

})

//posts order details to db
app.post('/order', (req,res) => {

})

//posts payment details to db
app.post('/payment',(req,res)=>{

})

//render payment options,render order details
app.get('/checkout', (req,res) => {
    res.render("payments", {
        partials: {
            head: "/partials/head"
        }
    })

})

// confirmation of payment ending point 
app.get('/readyToEat', (req,res) => {
    res.render("readytoeat", {
        partials: {
            head: "/partials/head"
        }
    })

})













app.listen(3000, ()=>{
    console.log('Server is listening!')
})