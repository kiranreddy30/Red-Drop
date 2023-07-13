const mongoose=require('mongoose')
const colors=require('colors')




const connectDB=async()=>{
    try{

        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongoose DB ${mongoose.connection.host}`)
    }
    catch(error){
        console.log`MongoDB Database Error ${error}`
    }
}


module.exports= {connectDB}