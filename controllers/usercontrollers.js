const User=require('../model/uSERDetails.js')
exports.home  = (req,res) =>  {
    res.send('Hello world');
}

exports.createUser=async(req,res)=>{
    //extract info
    try{
const {name,email,age}=req.body
if(!name || !email || !age){
    throw new Error("name,mail and age is required");
}
const user=await User.create({
    name,
    email,
    age
})
res.status(201).json({
    success:true,
    message:"User created Successfully",
    user
})
    }
    catch(error){
console.log(error);
res.status(400).json({
    success:false,
    message:error.message,
})
    }

}
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        
        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}
exports.editUser=async(req,res)=>{
    try{
        
    const user=await User.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({
        sucess:true,
        message:"user updated sucessfully"
    })
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}
exports.delUser=async(req,res)=>{
try{
    // del data from url para 
const userId = req.params.id;
await User.findByIdAndDelete(userId)
res.status(200).json({
    sucess:true,
    message:"user deleted sucessfully"
})
}
catch (error) {
    console.log(error);
    res.status(400).json({
        success: false,
        message: error.message,
    })
}
}