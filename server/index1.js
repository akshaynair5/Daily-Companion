const express = require('express')
const body_parser = require('body-parser')
const app = express()
const mysql = require('mysql')
const cors  = require('cors')


app.use(cors());
app.use(express.json())
const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password: null,
    database: 'daily-companion'
});

// $query = 'SELECT * FROM `users.dc`'



app.post("/new/signup",(req,res) =>{
    const name = req.body.uname
    const password = req.body.upassword
    const email = req.body.uemail
    const country = req.body.ucountry
    const state = req.body.ustate
    db.query(
        "INSERT INTO `users.dc`(`name`, `password`, `email`, `country`, `state`) VALUES (?,?,?,?,?)",
        [name,password,email,country,state],(err,result) =>{
            if(err){
                console.log(err);
            }else{
                console.log("success")
            }
        }
    )
})

// app.get("/data",(req,res)=>{
//     const state = req.body.state
//     db.query("SELECT state FROM ")
// })


app.listen(3001 , () => {
    console.log('appy')
});