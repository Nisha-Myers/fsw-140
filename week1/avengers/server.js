const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "avengers"
});


db.connect((err) => {
    if(err) {
        returnerr
    }
    console.log("You are Connected to the database")
});


app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());


app.get("/api/allAvengers", (req,res) =>{
    let sqlString = "SELECT * FROM avengers"
    db.query(sqlString, (err,result) => {
        if(err){
            return err
        }
        res.send(result)
    });
});



app.listen(9000, () =>{
    console.log("Localhost on port 9000")
});