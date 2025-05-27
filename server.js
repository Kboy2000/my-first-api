const express = require('express')
const mongoose = require('mongoose')
const userRoute= require('./routes/user.route')

mongoose.connect("mongodb://localhost:27017/dd")

const app= express()
app.use(express.json())
app.use('/users', userRoute)
const server =app.listen(3000, ()=>{
    console.log('connected to server successfully');
    
})
