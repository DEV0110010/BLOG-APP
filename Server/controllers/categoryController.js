import categotyModel from "../models/categoryModel.js"

class CategoryController{
    static getAllCategories = async (req,res) => {
        try {
            const fetchAllCategories = await categotyModel.find({})
            return res.status(200).json(fetchAllCategories)
        } catch (error) {
            return res.status(400).json({'message': error.message})
        }
        
    }
    static addNewCategory = async (req,res) => {
        const {title} = req.body;
        try {
            if(title){
                const newCategory = new categotyModel({
                    title,
                })
                const savedCategory = await newCategory.save();
                if(savedCategory){
                    return res.status(200).json({'message': "Category Edit Successfully"})  
                }
            }else{
                return res.status(400).json({'message': "All Fields are Required"}) 
            }
        } catch (error) {
            return res.status(400).json({'message': error.message}) 
        }
    }
}

export default CategoryController