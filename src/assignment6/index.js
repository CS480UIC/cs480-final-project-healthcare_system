var mysql = require('mysql')
var express = require('express')
//var Router = require('router')
//const path = require('path')
//const ejs = require("ejs")
var app = express()

//var routes = Router()

app.use(express.urlencoded());
app.use(express.json());

app.listen(3000, () => {
    console.log('server started port  3000');
})
//app.set("view engine", "ejs");

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'healthcare_system'
});

