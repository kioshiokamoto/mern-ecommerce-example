import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`MONGODB CONECTION SUCCESS`)
    } catch (error) {   
        console.log(`MONGODB CONECTION FAILED`);
        process.exit(1);
    }
}
export default connectDB;