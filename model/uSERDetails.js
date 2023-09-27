const mongoose=require('mongoose')
const { use } = require('../app')
const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,'Name is req']
    },
    email:String,
    age:Number
})
module.exports=mongoose.model("User",userSchema)