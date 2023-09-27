const mysql = require('mysql');
const express = require('express');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

//conect to mysql
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Mysql esta conectado papu');

});
const app = express()

//crear base de datos
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE mynewdb'
  db.query(sql, (err) => {
    if (err) {
      throw err
    }
    res.send("data base created");
  });
});

app.listen('4000',()=>{
 console.log('server starded in por 4000');
})
