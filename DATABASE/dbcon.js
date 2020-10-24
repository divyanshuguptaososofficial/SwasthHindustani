const express = require('express');
const l_mysql   = require("mysql");
const g_app     = express();
const port = 8080

g_app.use(express.json());

const Sequelize = require('sequelize');

const sequelize = new Sequelize('swasthahindustani', 'root', null, {
  host: 'localhost',
  dialect:'mysql'
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully with the Database.');
    g_app.listen(port, () => console.log(`notes-app listening on port ${port}!`));
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  

  

  module.exports ={

    g_sequelize: sequelize,
    g_Sequelize:  Sequelize,
    g_app:g_app
    


};