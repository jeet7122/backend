// npm is playstore/appstore of node where we can find to many packages;
// package => already baneli vastu;
// npm packages = files of codes;
// npm => lots of packages appstore
// npm before => Node Package Manager;
// npm after => any random NPM name ;
// express is a framework for nodejs
// express use case => routing;
// routing => every slash(/) separated in https://github/profile
// /profile => is a route.
// types of routes => GET, POST, mostly used for restful API'S(PUT, PATCH, DELETE);
// Explaination of GET and POST:
// If we search for anything/on any action, the url gets updates and the values passed are seen in url then it is GET method;
// If details are not seen in url that is POST method;
//Taking Example:
//If we login a form and all private details are passed by GET method then everything will be visible in url, which we do not want.



var masi = require('./script');
var oneLiner = require('one-liner-joke');
var figlet = require('figlet');
var express = require('express');

var app = express();

app.use(function(req, res, next) {
    console.log('Hello from middleware!');
    next();// next is used because if th request is made it does not get stucked in the middleware, so it pushes the request ahead to routes
});

app.use(function(req, res, next) {
    console.log('Hello from middleware 2!');
    next();// next is used because if th request is made it does not get stucked in the middleware, so it pushes the request ahead to routes
});

app.get('/', function(req, res){
    res.send('Hello From Home!');
});
 
app.get('/profile', function(req, res){
    res.send('Hello From Profile!');
});
app.listen(3000);



// npm i nodemon -g is available global
// nodemon package helps user by automatically restarting the server after changes are made 

// route chalne se pehle jo bhi function run karvana hai, we use middleware for that;
// example, if i want to see how many times this route was visited i can add countr function in middleware
// using app.use((request/req response/res next()))
// we can make as many middleware as you want


