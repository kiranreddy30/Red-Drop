const express=require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController, getInventory } = require('../controllers/inventoryController');
const router=express.Router();


//routes

//Add inventory
router.post('/create-inventory',authMiddleware,createInventoryController);

//Get inventory
router.get('/get-inventory',authMiddleware,getInventory);




module.exports=router;