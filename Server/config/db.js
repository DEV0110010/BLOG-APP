import mongoose from "mongoose";

const connectToMongo = async () => {
    const res = await mongoose.connect("mongodb+srv://ProjectUser:Minor%40Project%401234%21%40@project-web-cluster.ujyn0.mongodb.net/?retryWrites=true&w=majority&appName=PROJECT-WEB-CLUSTER/Minor-Project-Blog")
    if(res){
        console.log("Connected Successfully");
    }
}   

export default connectToMongo