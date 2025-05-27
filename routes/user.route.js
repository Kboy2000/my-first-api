const User= require('../model/user.model')
const express= require('express')
const router= express.Router()


//CREATE USER
router.post("/", async(req, res)=>{
   try {
     const {userName, email}= req.body;
    const newUser = new User({userName, email});
    await newUser.save();
     res.status(200).json({
        status: 'success',
        message:'users successfully found',
        data: newUser
    })
   
   } catch (error) {
     res.status(500).json({
        status:'failure',
        message:error.message
    })

  
} 
})

// GET ALL USERS

router.get('/', async (req, res)=>{
  try {
      const users= await User.find()
    res.status(200).json({
        status: 'success',
        message:'users successfully found',
        data: users
    })
  } catch (error) {
    res.status(500).json({
        status:'failure',
        message:error.message
    })
  }
})

//GETG SINGLE USERS

module.exports=router;