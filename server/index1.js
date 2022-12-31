const express = require('express')
const bod_parser = require('body-parser')
const app = express()
const mysql = require('mysql')
const cors  = require('cors')


app.use(cors());
const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password: null,
    database: 'daily-companion'
});

db.connect(function(err){
    if(err){
        console.log(err);
    }
    // app.post("http://localhost/phpmyadmin/index.php?route=/sql&db=daily-companion&table=users.dc&pos=0",(req, res) => {
    // const name = req.body.name;
    // const email = req.body.name;
    // const country = req.body.name;
    // const state = req.body.name;

    //     db.query("INSERT INTO users.dc (name,email,country,state) VALUES (?,?,?,?)",[name,email,country,state],
    //     (err,result) => {
    //         if(err){
    //             console.log('Error values not inserted');
    //         } else{
    //             res.send("Values inserted")
    //         }
    //     }
    //     )
    // })
    

})
$query = 'SELECT * FROM `users.dc`'

db.query($query , function(err,rows,fields){
    if(err){
        console.log(err.code);
        console.log("An error occured");
        return;
    } 
     console.log("Successful excecution",rows);
     app.get("",(req, res) => res.json(rows))
})




app.listen(3001 , () => {
    console.log('appy')
});