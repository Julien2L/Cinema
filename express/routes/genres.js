const express = require('express');
const Router = express.Router();
const mySqlConnection = require('../connection')

Router.get('/', (req, res) => {
  mySqlConnection.query("SELECT name FROM genre", (err, rows, fields) => {
      if(!err) {
          res.send(rows);
      }else {
          console.log(err);
      }
  })
})

module.exports = Router;