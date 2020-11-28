const bodyParser = require('body-parser');
const express = require('express');
const { g_USER} = require("./model.js");

const { g_app  }   =  require("./dbcon.js")
g_app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients.)
g_app.use(express.json());

g_app.post('/users', function(req, res) {
  g_USER.create({ fname: req.body.fname,lname: req.body.lname,email:req.body.email, pass: req.body.password,dob: req.body.dob,number: req.body.number }).then(function(name) {
    //console.log("HELOOOOOOOO",res);
    
  res.json()

 



 
  res.end()
  });
});
g_app.post("/login",function(req, res) {
    g_USER.findOne({ where: {email: req.body.email, pass: req.body.password} }).then(function(user) {
       
        console.log(user.email);
        res.json()
      
});
});
module.exports=
{


  g_app: g_app
};