const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");


const createInventoryController=async(req,res)=>{
    try {

        const {email,inventoryType}=req.body;
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(500).send({
                success:false,
                message:"User Not Found",
                error
            })
        }

        if(inventoryType==='in' && user.role!='donar'){
           throw new Error('Not a donar account');
        }
        if(inventoryType==='out' && user.role!='hospital'){
            throw new Error('Not a hospital account');
        }

        //save the record or inventory
        const inventory=new inventoryModel(req.body);
        await inventory.save();
        return res.status(201).send({
            success:true,
            message:"New Blood recorded in inventory ",
            
        })



        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in create inventory API",
            error
        })
    }
}


const getInventory=async(req,res)=>{
    try {
        const inventory=await inventoryModel
        .find({
            organization:req.body.userId
        })
        .populate('donar')
        .populate('hospital')
        .sor({createdAt: -1});
        return res.status(200).send({
            success:true,
            message:"Get inventory successfull",
            inventory
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in get inventory API",
            error
        })
        
    }

}


module.exports={createInventoryController,getInventory}