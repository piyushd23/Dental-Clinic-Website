const { Console, time } = require('console')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port=3019

const app = express()
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/students')
const db = mongoose.connection
db.once('open',()=>{
    console.log("Mongodb connection successful")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age:String,
    date:Date,
    time:String,
    mobile:Number,
})

const Users = mongoose.model("datas",userSchema)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post("/post",async(req,res)=>{
    const {name,email,age,date,time,mobile}=req.body
    const user = new Users({
        name,
        email,
        age,
        date,
        time,
        mobile
    })
    await user.save()
    console.log(user)
    //res.send("Form Submission Successfull")

})

// mongoose.connect('mongodb://localhost:27017/dentist')
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'form.html'))
// })

app.listen(port,()=>{
    console.log("server started")
})

