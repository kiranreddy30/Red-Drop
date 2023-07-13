const express=require("express");
const router=express.Router();
const {testing}=require("../controllers/textController")


router.get('/',testing);



module.exports=router;