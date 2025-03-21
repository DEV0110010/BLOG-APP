import mongoose from "mongoose";

const connectToMongo = async () => {
    const res = await mongoose.connect("mongodb+srv://Database:Data%40Data@blog.ujyn0.mongodb.net/new-database")
    if(res){
        console.log("Connected Successfully");
    }
}   

export default connectToMongo