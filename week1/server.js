const express = require('express')
const mysql = require('mysql')
const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'dogs'
})

db.connect((err) => {
    if(err){
        return err
    }
    console.log("Connected to the Database")
})

// Create DB
app.get('/createDB', (req, res) => {
    let createDb = "create database Dogs"
    db.query(createDb, (err, res) => {
        if(err){
            return err
        }
        console.log(res)
    })
    res.send('Dogs DB created successfully')
})

// Table
app.get('/createTable', (req, res) => {
    let createTable = "create table dogs_info( id INT AUTO_INCREMENT, breed VARCHAR(100), size VARCHAR(25), name VARCHAR(50), owner_name VARCHAR(50), PRIMARY KEY (id) )"
    db.query(createTable, (err, res) => {
        if(err){
            return err
        }
        console.log(res)
    })
    res.send('Table created successfully')
})

// Insert Data
app.get('/insertRow1', (req, res) => {
    let dog = {breed: "pomeranian", size: "25 in", name: "Mr. Bigglesworth", owner_name: "Melissa"}
    let insertRow = "INSERT INTO dogs_info SET ?"
    db.query(insertRow, dog, (err, res) => {
        if(err){
            return err
        }
        console.log(res)
    })
    res.send('Dog information inserted')
})

app.get('/insertRow2', (req, res) => {
    let dog = {breed: "pitbull", size: "48 in", name: "Hermey Mendleson", owner_name: "Trisha"}
    let insertRow = "INSERT INTO dogs_info SET ?"
    db.query(insertRow, dog, (err, res) => {
        if(err){
            return err
        }
        console.log(res)
    })
    res.send('Dog information inserted')
})

app.get('/insertRow3', (req, res) => {
    let dog = {breed: "daschund", size: "30 in", name: "Weenie Jr.", owner_name: "Anthony"}
    let insertRow = "INSERT INTO dogs_info SET ?"
    db.query(insertRow, dog, (err, res) => {
        if(err){
            return err
        }
        console.log(res)
    })
    res.send('Dog information inserted')
})

// Run a SELECT query
app.get('/getDogInfo', (req, res) => {
    let sqlString = "SELECT * FROM dogs_info"
    db.query(sqlString, (err, res) => {
        if(err){
            return err
        }
        console.log(res)
    })
    res.send("You selected all dogs")
})

// Where clause
app.get('/getDogInfo/:id', (req, res) => {
    let sqlString = `SELECT * FROM dogs_info WHERE id = ${req.params.id}`
    db.query(sqlString, (err, res) => {
        if(err){
            return err
        }
        console.log(res)
    })
    res.send("You selected a certain dog")
})

// Update
app.get('/updateDog/:id', (req, res) => {
    let updateName = "Big Baby"
    let sqlString = `UPDATE dogs_info SET name = "${updateName}"  WHERE id = ${req.params.id}`
    db.query(sqlString, (err, res) => {
        if(err){
            return err
        }
        console.log(res)
    })
    res.send("Updated dog name")
})

// Delete
app.get('/deleteDog/:id', (req, res) => {
    let sqlString = `DELETE FROM dogs_info WHERE id = ${req.params.id}`
    db.query(sqlString, (err, res) => {
        if(err){
            return err
        }
        console.log(res)
    })
    res.send("Deleted dog name")
})

app.listen(3000, () => {
    console.log('Localhost on port 3000')
})