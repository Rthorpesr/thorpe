const mysql = require('mysql2');
const keys  = require('./keys');

const connection = mysql.createConnection(keys.mysql);

connection.connect(function(err)
   {
     if (err) throw err.stack;
     console.log('Connected to database');
   });
 
 
module.exports = connection;