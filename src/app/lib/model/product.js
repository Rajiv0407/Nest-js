import mongoose from "mongoose";

const productModel= new mongoose.Schema({
    product_name:String,
    category_name:String,
    price:String,
    status:String
})
export const Product= mongoose.models.dummy_data || mongoose.model('dummy_data',productModel)
