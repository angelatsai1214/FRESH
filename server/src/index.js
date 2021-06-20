var mysql = require('mysql');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const express = require('express');

const app = express();
const cors = require("cors");
app.use(cors);

app.post('/add', (req, res) => {
    console.log(req)
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Result: " + result);
        });
      });
    res.json({
        message: "hello world",
    });
});

app.listen(5000, () => {
    console.log('server hosted on port 5000');
});