const bcrypt=require('bcrypt');
const userModel = require("../models/userModel");
const jwt=require('jsonwebtoken');


const registerController=async(req,res)=>{
    try {
        const exsistingUser=await userModel.findOne({email:req.body.email});
        //validation
        if(exsistingUser){
            return res.status(200).send({
                success:false,
                message:'User already exist'
            })
        }

        //hashing password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt);
        req.body.password=hashedPassword;

        //REST DATA acces and save it 
        const user=new userModel(req.body);
        await user.save();
        return res.status(200).send({
            success:true,
            message:"User registered",
            user
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in register API",
            error
        })
    }
};

const loginController=async(req,res)=>{

    try{
    const user=await userModel.findOne({email:req.body.email});
    if(!user){
        return res.status(404).send({
            success:false,
            message:'User does not exist'
        })
    }

    //check role
    if(user.role!==req.body.role){
        return res.status(500).send({
            success:false,
            message:'Role does not match'
        })
    }

    //compare password
    const comparepassword=await bcrypt.compare(req.body.password,user.password);
    if(!comparepassword){
        return res.status(500).send({
            success:false,
            message:'Email/Password is invalid'
        })
    }

    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'});
    return res.status(200).send({
        success:true,
        message:'Login Succesfully',
        token
    })
    } catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in login API",
            error
        })
    }


};

const currentUserController=async(req,res)=>{
    try {

        const user=await userModel.findOne({_id:req.body.userId});
        return res.status(200).send({
            success:true,
            message:"User fetched successfully",
            user
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
                success:false,
                message:"Unable to get correct User",
                error
            
            })
        
    }

}

module.exports={registerController,loginController,currentUserController}