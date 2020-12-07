const bodyParser = require('body-parser');
const express = require('express');

const { g_Client} = require("./model.js");
const { g_ClientEmiDetails} = require("./model.js");
const { g_Services, g_Hospital} = require("./model.js");

const { g_app  }   =  require("./dbcon.js")
g_app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
g_app.use(express.json());

//----API for CLIENT REGISTRATION------
g_app.post('/register', function(req, res) {
  g_Client.create({ cl_emailid: req.body.email,cl_password: req.body.password,cl_firstname:req.body.fname,cl_lastname: req.body.lname, 
  cl_age: req.body.dob, cl_number: req.body.number, cl_locationpin: req.body.pin
  
  
  }).then(function(name) {
    
    
  res.json({

    message : 'inserted'
  })
  res.end()
  })
  .catch(err =>
    console.log(err)
  )
});

//-----API for User Login and Fetching Client Details
g_app.post("/login",function(req, res) {
  
    g_Client.findOne({ where: {cl_emailid: req.body.email, cl_password: req.body.password} }).then(function(user) {
       
        console.log(user.cl_emailid);
      return  res.send({id: user.cl_id,
         name:  user.cl_firstname,
         email: user.cl_emailid,
         phone: user.cl_number,
         pincode:user.cl_locationpin,
         dob:   user.cl_age,
         pan:   user.cl_panno,
         aadhaar: user.cl_aadhaarno,
         addone:user.cl_addressone,
         addtwo:user.cl_addresstwo
      
      
      
      
      })
      
      
}).catch(err =>
 
 
 console.log(err)
)

});
//----API for CLIENT BASIC INFORMATION------
g_app.post('/basic', function(req, res) {
  g_Client.update(
    { cl_gender:    req.body.gender,
      cl_emailid:   req.body.email,
      cl_firstname: req.body.name,
      cl_age:       req.body.age,
      cl_number:    req.body.number
    
    
    
    },
    { where: { cl_id: req.body.id} }
  )
    .then(function(result) {
      return  res.send({  result : result
        
     
     
     
     })
    })
    .catch(err =>
      //handleError(err)
      console.log(err)
    )
});

//----API for CLIENT  INFORMATION------
g_app.post('/other', function(req, res) {
  g_Client.update(
    { cl_panno: req.body.panno,
      cl_aadhaarno : req.body.aadhaarno,
      cl_addressone:req.body.address1,
      cl_addresstwo:req.body.address2,
      cl_locationpin:req.body.pincode
    
    
    
    },
    { where: { cl_id: req.body.id } }
  )
    .then(result =>
      console.log(result)
      //handleResult(result)
    )
    .catch(err =>
      //handleError(err)
      console.log(err)
    )
});


//-----API for fetching Client emi details 
g_app.get("/fetchemidetails",function(req, res) {
 
    g_ClientEmiDetails.findOne({ where: {me_id: req.body.me_id} }).then(function(emi) {
       
        console.log(emi.cd_emidueamount);
        res.json()
      
});
});

//-----API for fetching Hospital & Services details using Location ,Hospital ID and Like
g_app.get("/search", (req, res) => {
  g_Hospital.findAll({ where : {lc_locationpin : 20},
    include: [{
      model: g_Services,
      
      
      required: true // has no effect, will create an inner join
    }]
  }).then(Details => {
      
   // res.json(Details)
  // console.log(Details[0].services[5].sv_name)
  console.log(Details)
  res.send({ Data: 
    Details})
}).catch(err => {
  console.log(err)
})
})




























//-----API for fetching Hospital details based on Client location
g_app.get("/hospital", (req, res) => {
  g_Hospital.findAll({ where : { lc_locationpin: '30'}})
    .then(Details => {
      
        res.json(Details)
       //console.log(Details[0].hs_name)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})
g_app.get("/hospitals", (req, res) => {
  g_Hospital.findAll({ where : { lc_locationpin: req.body.pin}})
    .then(Details => {
      
        res.json(Details)
       //console.log(Details[0].hs_name)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

//-----API for fetching ALL Hospital Services 
g_app.get("/services", (req, res) => {
  g_Services.findAll()
    .then(Users => {
        res.json(Users)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})












module.exports=
{


  g_app: g_app
};