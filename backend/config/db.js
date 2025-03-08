import mongoose from "mongoose";



 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://Your credentials cluster0.qgyqe.mongodb.net/food-del').then(()=>{
        console.log("DB connected");
    })
}
