var mysql = require('mysql')
var express = require('express')
var Router = require('router')
const path = require('path')
const ejs = require("ejs")
var app = express()

var routes = Router()

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    res.render("index", { response: { name: "" } });

})
// Employee routes
app.get('/employee/employee', (req, res) => {
    res.render("employee/employee", { response: { name: "" } });

})
app.get('/employee/create', (req, res) => {
    res.render("employee/create", { response: { name: "" } });

})
app.get('/employee/update', (req, res) => {
    res.render("employee/update", { response: { name: "" } });

})
app.get('/employee/delete', (req, res) => {
    res.render("employee/delete", { response: { name: "" } });

})
app.get('/employee/read', (req, res) => {
    res.render("employee/read", { response: { name: "" } });

})
// Hospital routes
app.get('/hospital/hospital', (req, res) => {
    res.render("hospital/hospital", { response: { name: "" } });

})
app.get('/hospital/create', (req, res) => {
    res.render("hospital/create", { response: { name: "" } });

})
app.get('/hospital/update', (req, res) => {
    res.render("hospital/update", { response: { name: "" } });

})
app.get('/hospital/delete', (req, res) => {
    res.render("hospital/delete", { response: { name: "" } });

})
app.get('/hospital/read', (req, res) => {
    res.render("hospital/read", { response: { name: "" } });

})



// connecing to localhost
app.listen(3000, () => {
    console.log('server started port  3000');
})
app.set("view engine", "ejs");

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'healthcare_system'
});


