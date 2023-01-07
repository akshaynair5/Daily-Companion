const express = require('express')
const body_parser = require('body-parser')
const app = express()
const mysql = require('mysql')
const cors  = require('cors')


app.use(cors());
app.use(express.json())
const db = mysql.createConnection({
    user:'sqluser',
    host: 'localhost',
    password: 'Playstation4',
    database: 'daily-companion',
    port:3307,
    insecureAuth : true
});

db.query("SELECT * FROM `users.dc`",(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
})

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
                console.log(res.err);
            }else{
                console.log("success")
            }
        }
    )
})

app.post("/validation",(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    db.query("SELECT * FROM `users.dc` WHERE email= ? AND password= ?",[email,password],(err,result)=>{
        if(err){
            res.send({err :err});
        }
        if(result.length>0){
            res.send(result);
        }
        else{
            res.send({message:"Wrong username/password combination"})
        }
    })
})


// notes saving and editing done here

app.post("/savingnotes",(req,res)=>{
    const userid = req.body.userid
    const note = req.body.note

    db.query("INSERT INTO `notes`(`userid`, `note`) VALUES (?,?)",
    [userid,note],(err,result) =>{
        if(err){
            console.log(res.err);
        }
        if(result.length>0){

            res.send(result)
            console.log("success")
        }
    })
})

app.post("/gettingnotes",(req,res)=>{
    const userid = req.body.userid

    db.query("SELECT `note` FROM `notes` WHERE `userid`=?",[userid],(err,result)=>{
        if(err){
            console.log(res.err);
        }else{
            const data = JSON.parse(JSON.stringify(result))
            res.send(data);
        }
    })
})

app.listen(3001 , () => {
    console.log('running on port 3001')
});