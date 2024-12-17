import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title:{
        type: String,
    }, 
})

const categotyModel = mongoose.model("categories", categorySchema);

export default categotyModel