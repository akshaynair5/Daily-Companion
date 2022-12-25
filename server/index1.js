const express = require('express')
const appserv = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password: '',
    database: 'daily-companion'
})

appserv.post("/signup",(req, res) => {
    const name = req.body.name;
    const email = req.body.name;
    const country = req.body.name;
    const state = req.body.name;

    db.query("INSERT INTO users.dc (name,email,country,state) VALUES (?,?,?,?)",[name,email,country,state],
    (err,result) => {
        if(err){
            console.log('Error values not inserted');
        } else{
            res.send("Values inserted")
        }
    }
    )
})

appserv.listen(3001 , () => {
    console.log('appy')
});