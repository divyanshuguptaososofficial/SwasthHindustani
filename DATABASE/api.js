const bodyParser = require('body-parser');
const express = require('express');
const { g_USER} = require("./model.js");
const { g_Client} = require("./model.js");
const { g_ClientEmiDetails} = require("./model.js");
const { g_Services} = require("./model.js");

const { g_app  }   =  require("./dbcon.js")
g_app.use(express.urlencoded());

// Parse JSON bodies(as sent by API clients)
g_app.use(express.json());

g_app.post('/users', function(req, res) {
  g_USER.create({ name: "hello" }).then(function() {
   
    
  res.json()
 res.end()
  });
});

//----API for CLIENT REGISTRATION------
g_app.post('/register', function(req, res) {
  g_Client.create({cl_id: "1",cl_emailid: req.body.email, cl_password: req.body.pass
  
  
  }).then(function(name) {
   
    
  res.json()
  res.end()
  });
});

//-----API for User Login and Fetching Client Details
g_app.post("/login",function(req, res) {
 // g_app.listen(8080, () => console.log(`notes-app listening on port 8080!`));
    g_Client.findOne({ where: {cl_emailid: 'a', cl_password: 'a'} }).then(function(user) {
       
        //console.log(user.cl_emailid);
        res.json()
      
});
});

//----API for inserting Client EMI details
g_app.post('/emidetails', function(req, res) {
  g_USER.create({ ce_id: req.body.ce_id, cd_emiduedate: req.body.emiduedate, cd_emidueamount: req.body.emidueamount, 
    cd_emipaidamount: req.body.emipaidamount, me_id: req.body.me_id }).then(function(name) {
   
    
  res.json()

 



 
  res.end()
  });
});




//-----API for fetching Client emi details 
g_app.get("/fetchemidetails",function(req, res) {
 
    g_ClientEmiDetails.findOne({ where: {me_id: req.body.me_id} }).then(function(emi) {
       
        console.log(emi.cd_emidueamount);
        res.json()
      
});
});


//-----API for fetching Hospital Services 
g_app.get("/Servicedetails",function(req, res) {
 
  g_Services.findOne({ where: {sv_id: req.body.serviceid} }).then(function(services) {
     
     // console.log();
      res.json()
    
});
});

module.exports=
{


  g_app: g_app
};