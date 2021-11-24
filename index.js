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
app.get('/hospital', (req, res) => {
    res.render("hospital", { response: { name: "" } });

})
app.get('/hospital/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);

    /*var que = "SELECT * FROM hospital WHERE hospital_id = " + id;
    db.query(que, function (err, result, fields) {
        if (err) throw err;

        var json = JSON.stringify(result)
        console.log(json);
        res.render("hospital", { response: result });
    });*/

    res.render("hospital", { response: { name: "" } });
})
app.get('/covid', (req, res) => {
    res.render("covid", { response: { name: "" } });

})
app.get('/patient', (req, res) => {
    res.render("patient", { response: [{}] });

})
app.get('/update', (req, res) => {
    res.render("update", { response: "" });

})
app.get('/delete', (req, res) => {
    res.render("delete", { response: { message: "" } });

})
app.get('/main', (req, res) => {
    res.render("main", { response: [], hospital: [] });
    var first_name = req[0].first_name;

    console.log(first_name);
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
    var que = "SELECT COUNT(*) AS count FROM patient WHERE username='" + email + "' AND password='" + password + "'";
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
                var que = "SELECT * FROM patient WHERE username='" + email + "' AND password='" + password + "'";
                var que1 = "SELECT name FROM hospital";
                var r1;
                db.query(que1, function (err, result, fields) {


                    var json = JSON.stringify(result)
                    console.log(json);
                    r1 = result;
                });
                db.query(que, function (err, result, fields) {


                    var json = JSON.stringify(result)
                    console.log(json);
                    res.render("main", { response: result, hospital: r1 });
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
app.post('/patient', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    console.log("inside post /")
    var id = req.body.name;
    if (id != null) {
        var que = "SELECT * FROM patient WHERE patient_id='" + id + "'";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {

                var json = JSON.stringify(result)
                console.log(json);
                res.render("patient", { response: result });


            }

        });
    }
    else {
        var que = "SELECT * FROM patient";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {

                var json = JSON.stringify(result)
                console.log(json);
                res.render("patient", { response: result });


            }

        });
    }


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

