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


app.get('/intialize/intialize', (req, res) => {
    res.render("intialize/intialize", { response: { name: "" } });

})


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
// Medicine routes
app.get('/medicine/medicine', (req, res) => {
    res.render("medicine/medicine", { response: { name: "" } });

})
app.get('/medicine/create', (req, res) => {
    res.render("medicine/create", { response: { name: "" } });

})
app.get('/medicine/update', (req, res) => {
    res.render("medicine/update", { response: { name: "" } });

})
app.get('/medicine/delete', (req, res) => {
    res.render("medicine/delete", { response: { name: "" } });

})
app.get('/medicine/read', (req, res) => {
    res.render("medicine/read", { response: { name: "" } });

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

//patientfeedback

app.get('/patientfeedback/patientfeedback', (req, res) => {
    res.render("patientfeedback/patientfeedback", { response: { name: "" } });

})
app.get('/patientfeedback/create', (req, res) => {
    res.render("patientfeedback/create", { response: { name: "" } });

})
app.get('/patientfeedback/update', (req, res) => {
    res.render("patientfeedback/update", { response: { name: "" } });

})
app.get('/patientfeedback/delete', (req, res) => {
    res.render("patientfeedback/delete", { response: { name: "" } });

})
app.get('/patientfeedback/read', (req, res) => {
    res.render("patientfeedback/read", { response: { name: "" } });

})

//patient

app.get('/patient/patient', (req, res) => {
    res.render("patient/patient", { response: { name: "" } });

})
app.get('/patient/create', (req, res) => {
    res.render("patient/create", { response: { name: "" } });

})
app.get('/patient/update', (req, res) => {
    res.render("patient/update", { response: { name: "" } });

})
app.get('/patient/delete', (req, res) => {
    res.render("patient/delete", { response: { name: "" } });

})
app.get('/patient/read', (req, res) => {
    res.render("patient/read", { response: { name: "" } });

})

//doctor
app.get('/doctor/doctor', (req, res) => {
    res.render("doctor/doctor", { response: { name: "" } });

})
app.get('/doctor/create', (req, res) => {
    res.render("doctor/create", { response: { name: "" } });

})
app.get('/doctor/update', (req, res) => {
    res.render("doctor/update", { response: { name: "" } });

})
app.get('/doctor/delete', (req, res) => {
    res.render("doctor/delete", { response: { name: "" } });

})
app.get('/doctor/read', (req, res) => {
    res.render("doctor/read", { response: { name: "" } });

})
//modeofpayment

app.get('/modeofpayment/modeofpayment', (req, res) => {
    res.render("modeofpayment/modeofpayment", { response: { name: "" } });

})
app.get('/modeofpayment/create', (req, res) => {
    res.render("modeofpayment/create", { response: { name: "" } });

})
app.get('/modeofpayment/update', (req, res) => {
    res.render("modeofpayment/update", { response: { name: "" } });

})
app.get('/modeofpayment/delete', (req, res) => {
    res.render("modeofpayment/delete", { response: { name: "" } });

})
app.get('/modeofpayment/read', (req, res) => {
    res.render("modeofpayment/read", { response: { name: "" } });

})
app.get('/intialize/intialize', (req, res) => {
    res.render("intialize/intialize", { response: { name: "" } });

})

// connecing to localhost
app.listen(3000, () => {
    console.log('server started port  3000');
})
app.set("view engine", "ejs");


const db = mysql.createConnection({
    user: 'rrr',
    host: 'localhost',
    password: 'PASS',
    database: 'bookstore'
});

app.post('/intialize/intialize', (req, res) => {
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql="DROP TABLE IF EXISTS data";
    var sql1 = "CREATE TABLE data (name VARCHAR(255), address VARCHAR(255))";
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("table dropped");
    });
    db.query(sql1, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
  });
})

/*app.get('/intialize', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    res.render("/intialize/intialize", { response: "" });
    db.query(" CREATE TABLE TEST(ID int);", function (err, result, fields) {
          if (err) throw err;
          var json = JSON.stringify(result)
          res.render("/intialize", { response: json });
      });

})







app.get('/register', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    res.render("register", { response: "" });
    /*  db.query("SELECT * FROM patient", function (err, result, fields) {
          if (err) throw err;
          var json = JSON.stringify(result)
          res.render("register", { response: json });
      });

})

app.post('/intialize', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })

    console.log(req.body);
    var que = "CREATE TABLE TEST(ID int);";
    db.query(que, function (err, result, fields) {
        if (err) throw err;

        var json = JSON.stringify(result)
        res.render("intialize", { response: "record successfully inserted" });
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
                var que = "SELECT * FROM patient WHERE email='" + email + "' AND password='" + password + "'";
                db.query(que, function (err, result, fields) {


                    var json = JSON.stringify(result)
                    console.log(json);
                    res.render("main", { response: result });
                });

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

module.exports = db;*/
