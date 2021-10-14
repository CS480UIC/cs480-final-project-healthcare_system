var mysql = require('mysql')
var express = require('express')
var Router = require('router')
const path = require('path')
const ejs = require("ejs")
var app = express()

var routes = Router()

app.use(express.urlencoded());
app.use(express.json());

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
db.connect(function (error) {
    // callback

    if (error) {
        throw error;
    }
    console.log("MySQLconnected");

})

app.get('/', (req, res) => {
    res.render("index", { response: { name: "" } });

})
app.get('/create', (req, res) => {
    res.render("create", { response: "" });

})
app.get('/read', (req, res) => {
    res.render("read", { response: [{}] });

})
app.get('/update', (req, res) => {
    res.render("update", { response: "" });

})
app.get('/delete', (req, res) => {
    res.render("delete", { response: { message: "" } });

})
app.get('/main', (req, res) => {
    res.render("main", { response: { message: "" } });

})
app.get('/register', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    res.render("register", { response: "" });
    /*  db.query("SELECT * FROM patient", function (err, result, fields) {
          if (err) throw err;
          var json = JSON.stringify(result)
          res.render("register", { response: json });
      });*/

})

app.post('/register', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })

    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var que = "INSERT INTO patient (name,email,password) VALUES ('" + name + "','" + email + "','" + password + "')";
    db.query(que, function (err, result, fields) {
        if (err) throw err;

        var json = JSON.stringify(result)
        res.render("register", { response: "record successfully inserted" });
    });

})

app.post('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    console.log("inside post /")
    var email = req.body.email;
    var password = req.body.password;
    var que = "SELECT COUNT(*) AS count FROM patient WHERE email='" + email + "' AND password='" + password + "'";
    db.query(que, function (err, result, fields) {
        if (err) {
            throw err;
        }
        else {
            if (result[0].count == 0) {
                res.render("index", { response: { name: "Login credentials are not correct" } });
                return;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("main", { response: result });
            }

        }

    });

})

app.post('/create', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var que = "INSERT INTO patient (name,email,password) VALUES ('" + name + "','" + email + "','" + password + "')";
    db.query(que, function (err, result, fields) {
        if (err) throw err;

        var json = JSON.stringify(result)
        res.render("create", { response: "record successfully inserted" });
    });

})
app.post('/read', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    console.log("inside post /")
    var id = req.body.name;
    var que = "SELECT * FROM patient WHERE patient_id='" + id + "'";
    db.query(que, function (err, result, fields) {
        if (err) {
            throw err;
        }
        else {

            var json = JSON.stringify(result)
            console.log(json);
            res.render("read", { response: result });


        }

    });

})
app.post('/delete', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    console.log("inside post /")
    var id = req.body.name;
    var que = "DELETE FROM patient WHERE patient_id='" + id + "'";
    db.query(que, function (err, result, fields) {
        if (err) {
            throw err;
        }
        else {

            var json = JSON.stringify(result)
            console.log(json);
            res.render("delete", { response: { message: "record successful deleted" } });
        }

    });

})
app.post('/update', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    console.log("inside post /")
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var que = "UPDATE patient SET email='" + email + "', password='" + password + "' ,name ='" + name + "' WHERE patient_id ='" + id + "'";
    db.query(que, function (err, result, fields) {
        if (err) {
            throw err;
        }
        else {

            var json = JSON.stringify(result)
            console.log(json);
            res.render("update", { response: { message: "record successful updated" } });
        }

    });

})
module.exports = db;

