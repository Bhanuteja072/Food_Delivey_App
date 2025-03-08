import mongoose from "mongoose";



 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://bhanutejapusarla:142536@cluster0.qgyqe.mongodb.net/food-del').then(()=>{
        console.log("DB connected");
    })
}