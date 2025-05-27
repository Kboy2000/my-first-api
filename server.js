const express = require('express')
const mongoose = require('mongoose')
const userRoute= require('./routes/user.route')
require('dotenv').config()

mongoose.connect(process.env.REMOTE_DB_URL)

const app= express()
app.use(express.json())
app.get("/",(req, res)=>{
    res.send("Alive")
})
app.use('/users', userRoute)
const server =app.listen(3000, ()=>{
    console.log('connected to server successfully');
    
})
