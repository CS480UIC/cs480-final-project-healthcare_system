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

app.get('/medicine', (req, res) => {
    res.render("medicine", { response: [{}] });

})
app.get('/doctor', (req, res) => {
    res.render("doctor", { response: [{}] });

})
app.get('/employee', (req, res) => {
    res.render("employee", { response: [{}] });

})
app.get('/modeofpayment', (req, res) => {
    res.render("modeofpayment", { response: [{}] });

})
app.get('/patientfeedback', (req, res) => {
    res.render("patientfeedback", { response: [{}] });

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
app.post('/patient/create', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var username = req.body.username;
    var password = req.body.password;
    var address = req.body.address;
    var city = req.body.city;
    var country = req.body.country;

    var patiendid = req.body.patiendid;
    var hospitalid = req.body.hospitalid;
    var medicineid = req.body.medicineid;

    var que = "INSERT INTO patient (first_name,last_name, username,password, address,city,country,payment_id,hospital_id,medicine_id) VALUES ('" + firstname + "','" + lastname + "','" + username + "', '" + password + "','" + address + "','" + city + "','" + country + "'," + patiendid + "," + hospitalid + "," + medicineid + ")";
    db.query(que, function (err, result, fields) {
        if (err) {
            throw err;
        }
        else {
            var json = JSON.stringify(result)
            console.log(json);
            res.render("patient/create", { response: result });
        }
    });

})
app.post('/patient', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    console.log("inside post /")
    var id = req.body.name;
    var city = req.body.city;
    var deleteid = req.body.deleteid;
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
    else if (deleteid != null) {
        var que = "DELETE * FROM patient WHERE patient_id=" + deleteid;
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
    else if (city != null) {
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var username = req.body.username;
        var password = req.body.password;
        var address = req.body.address;
        var city = req.body.city;
        var country = req.body.country;

        var patiendid = req.body.patiendid;
        var hospitalid = req.body.hospitalid;
        var medicineid = req.body.medicineid;

        var que = "INSERT INTO patient (first_name,last_name, username,password, address,city,country,payment_id,hospital_id,medicine_id) VALUES ('" + firstname + "','" + lastname + "','" + username + "', '" + password + "','" + address + "','" + city + "','" + country + "'," + patiendid + "," + hospitalid + "," + medicineid + ")";
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

// MEDCICINE
// create
app.post('/medicine', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    if (req.body.readall != null) {

        var que = "SELECT * FROM medicine";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("medicine", { response: result });
            }
        });
    }
    else if (req.body.deleteidmedicine != null) {
        var id = parseInt(req.body.deleteidmedicine);

        var que = "DELETE FROM medicine where medicine_id = " + id;
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("medicine", { response: result });
            }
        });
    }
    else if (req.body.updateid != null) {
        var id = req.body.id;
        var name = req.body.name;
        var price = req.body.price;
        var expiry = req.body.expiry;
        var hospital = req.body.hospital;

        var que = "UPDATE medicine SET medicine_name = '" + name + "' , price = '" + price + "', expiry_term_year = '" + expiry + "', hospital_id= '" + hospital + "' WHERE medicine_id = '" + id + "'";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("medicine", { response: result });
            }
        });
    }
    else {
        var name = req.body.name;
        var price = req.body.price;
        var expiry = req.body.expiry;
        var hospital = req.body.hospital;

        var que = "INSERT INTO medicine (medicine_name,price, expiry_term_year,hospital_id) VALUES ('" + name + "','" + price + "','" + expiry + "', '" + hospital + "')";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("medicine", { response: result });
            }
        });
    }
})

// mode of payment

app.post('/modeofpayment', (req, res) => {
    if (req.body.readall != null) {

        var que = "SELECT * FROM mode_of_payment";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("modeofpayment", { response: result });
            }
        });
    }
    else if (req.body.deleteidpayment != null) {
        var id = parseInt(req.body.deleteidpayment);

        var que = "DELETE FROM mode_of_payment where payment_id = " + id;
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("modeofpayment", { response: result });
            }
        });
    }
    else if (req.body.updateid != null) {
        var id = req.body.updateid;
        var typeofpayment = req.body.typeofpayment;
        var docreferred = req.body.docreferred;
        var dateoftransaction = req.body.dateoftransaction;

        var que = "UPDATE mode_of_payment SET type_of_payment = '" + typeofpayment + "' , doc_referred = '" + docreferred + "', date_of_transaction = '" + dateoftransaction + "' WHERE payment_id = '" + id + "'";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("modeofpayment", { response: result });
            }
        });
    }
    else {
        var typeofpayment = req.body.typeofpayment;
        var docreferred = req.body.docreferred;
        var dateoftransaction = req.body.dateoftransaction;


        var que = "INSERT INTO mode_of_payment (type_of_payment, doc_referred,date_of_transaction) VALUES ('" + typeofpayment + "','" + docreferred + "', date_of_transaction = '" + dateoftransaction + "')";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("modeofpayment", { response: result });
            }
        });
    }
})
// patiend feedback

app.post('/patientfeedback', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    if (req.body.readall != null) {

        var que = "SELECT * FROM patient_feedback";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("patientfeedback", { response: result });
            }
        });
    }
    else if (req.body.deleteidmedicine != null) {
        var id = parseInt(req.body.deleteidmedicine);

        var que = "DELETE FROM patient_feedback where patient_id = " + id;
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("patientfeedback", { response: result });
            }
        });
    }
    else if (req.body.updateid != null) {
        var id = req.body.updateid;
        var employeeid = req.body.employeeid;
        var feedback = req.body.feedback;
        var patient_name = req.body.patient_name;
        var date_of_feedback = req.body.date_of_feedback;

        var que = "UPDATE patient_feedback SET employee_id = '" + employeeid + "' , feedback = '" + feedback + "', patient_name = '" + patient_name + "', date_of_feedback= '" + date_of_feedback + "' WHERE patient_id = '" + id + "'";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("patientfeedback", { response: result });
            }
        });
    }
    else {
        var employeeid = req.body.employeeid;
        var feedback = req.body.feedback;
        var patient_name = req.body.patient_name;
        var date_of_feedback = req.body.date_of_feedback;

        var que = "INSERT INTO patient_feedback (employee_id,feedback, patient_name,date_of_feedback) VALUES ('" + employeeid + "','" + feedback + "','" + patient_name + "', '" + date_of_feedback + "')";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("patientfeedback", { response: result });
            }
        });
    }
})

// doctor

app.post('/doctor', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    if (req.body.readall != null) {

        var que = "SELECT * FROM doctor";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("doctor", { response: result });
            }
        });
    }
    else if (req.body.deleteidmedicine != null) {
        var id = parseInt(req.body.deleteidmedicine);

        var que = "DELETE FROM doctor where doctor_employee_id = " + id;
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("doctor", { response: result });
            }
        });
    }
    else if (req.body.updateid != null) {
        var id = req.body.updateid;
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var address = req.body.address;
        var email = req.body.email;
        var city = req.body.city;
        var country = req.body.country;
        var description = req.body.description;
        var hospital_name = req.body.hospital_name;
        var salary = req.body.salary;
        var type_of_employement = req.body.type_of_employement;
        var phone_number = req.body.phone_number;
        var speciality = req.body.speciality;
        var doc_description = req.body.doc_description;
        var hospital_table_id = req.body.hospital_table_id;
        var que = "UPDATE doctor SET first_name = '" + first_name + "' , last_name = '" + last_name + "', address = '" + address + "', email= '" + email + "', city= '" + city + "', country = '" + country + "', description = '" + description + "', hospital_name = '" + hospital_name + "',salary = '" + salary + "', type_of_employment = '" + type_of_employement + "', phone_number = '" + phone_number + "',speciality = '" + speciality + "', doc_description = '" + doc_description + "', hospital_table_id = '" + hospital_table_id + "' WHERE doctor_employee_id = '" + id + "'";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("doctor", { response: result });
            }
        });
    }
    else {
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var address = req.body.address;
        var email = req.body.email;
        var city = req.body.city;
        var country = req.body.country;
        var description = req.body.description;
        var hospital_name = req.body.hospital_name;
        var salary = req.body.salary;
        var type_of_employement = req.body.type_of_employement;
        var phone_number = req.body.phone_number;
        var speciality = req.body.speciality;
        var doc_description = req.body.doc_description;
        var hospital_table_id = req.body.hospital_table_id;

        var que = "INSERT INTO doctor (first_name,last_name, address,email,city,country,description,hospital_name, salary, type_of_employment,phone_number,speciality,doc_description,hospital_table_id) VALUES ('" + first_name + "','" + last_name + "','" + address + "', '" + email + "' , '" + city + "','" + country + "', '" + description + "','" + hospital_name + "','" + salary + "','" + type_of_employement + "','" + phone_number + "','" + speciality + "','" + doc_description + "','" + hospital_table_id + "')";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("doctor", { response: result });
            }
        });
    }
})

// employee


app.post('/employee', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/register.html'), { name: "karan" })
    if (req.body.readall != null) {

        var que = "SELECT * FROM employee";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("employee", { response: result });
            }
        });
    }
    else if (req.body.deleteidmedicine != null) {
        var id = parseInt(req.body.deleteidmedicine);

        var que = "DELETE FROM employee where employee_id = " + id;
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("employee", { response: result });
            }
        });
    }
    else if (req.body.updateid != null) {
        var id = req.body.updateid;
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var address = req.body.address;
        var email = req.body.email;
        var city = req.body.city;
        var country = req.body.country;
        var description = req.body.description;
        var hospital_name = req.body.hospital_name;
        var salary = req.body.salary;
        var type_of_employement = req.body.type_of_employement;
        var hospital_id = req.body.hospital_id;

        var que = "UPDATE employee SET first_name = '" + first_name + "' , last_name = '" + last_name + "', address = '" + address + "', email= '" + email + "', city= '" + city + "', country = '" + country + "', description = '" + description + "', hospital_name = '" + hospital_name + "',salary = '" + salary + "', type_of_employment = '" + type_of_employement + "', hospital_id = '" + hospital_id + "' WHERE employee_id = '" + id + "'";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("employee", { response: result });
            }
        });
    }
    else {
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var address = req.body.address;
        var email = req.body.email;
        var city = req.body.city;
        var country = req.body.country;
        var description = req.body.description;
        var hospital_name = req.body.hospital_name;
        var salary = req.body.salary;
        var type_of_employement = req.body.type_of_employement;
        var hospital_id = req.body.hospital_id;


        var que = "INSERT INTO employee (first_name,last_name, address,email,city,country,description,hospital_name, salary, type_of_employment,hospital_id) VALUES ('" + first_name + "','" + last_name + "','" + address + "', '" + email + "' , '" + city + "','" + country + "', '" + description + "','" + hospital_name + "','" + salary + "','" + type_of_employement + "','" + hospital_id + "')";
        db.query(que, function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                var json = JSON.stringify(result)
                console.log(json);
                res.render("employee", { response: result });
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

