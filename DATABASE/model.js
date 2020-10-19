const { g_Sequelize } = require("./dbcon.js");
const { g_sequelize } = require("./dbcon.js");

const Sequelize = require('sequelize');

const g_USER = g_sequelize.define('users', { name: Sequelize.TEXT,lname:
     Sequelize.TEXT, number: Sequelize.BIGINT,email :{
     
  type: Sequelize.STRING,
  unique:true
     
     
},
dob : Sequelize.TEXT,pass: Sequelize.TEXT });
g_sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);
   
      });
  

module.exports={


    g_USER:g_USER
};
