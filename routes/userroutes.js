const express= require("express");


const {home, createUser,getUsers,editUser,delUser} = require("../controllers/usercontrollers.js")

const router=express.Router();
router.get("/",home);
router.post("/createuser", createUser);
router.get('/getusers' , getUsers);
router.put('/edituser/:id',editUser)
router.delete('/deluser/:id',delUser)

module.exports=router;