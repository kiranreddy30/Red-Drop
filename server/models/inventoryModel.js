const mongoose = require("mongoose");


const inventoryModel=new mongoose.Schema({
    inventoryType:{
        type:String,
        required:[true,"Inventory type required"],
        enum:['in','out']
    },
    bloodGroup:{
        type:String,
        required:[true,'Blood group is required'],
        enum:['O+','O-','AB+','AB-','A+','A-','B+','B-']
    },
    quantity:{
        type:Number,
        require:[true,'blood quantity']
    },
    organization:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'organization is required']
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:function(){
            return this.inventoryType==='out'
        }

    },
    donar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: function(){
            return this.inventoryType==='in';
        }
    }

},
{timestamps:true}
);



module.exports=mongoose.model('Inventory',inventoryModel)