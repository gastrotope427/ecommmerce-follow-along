const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"please provide the product name"],
        },
        description:{
            type: String,
            required: [true,"please provide the product description"],
        },
        category:{
            type: String,
            required:[true,"please provide the product category"],
        },
        tags: {
            type: String,
            default:[],
        },
        price:{
            type: Number,
            required:[true,"please provide the product price"],
        },
        stock: {
            type:Number,
            required:[true,"please provide the product stock"],
        },
        email:{
            type: String,
            required:[ true, "please provide an email"],
            match:[/.+@.+\..+/,"please provide a valid email adress"],
        },
        images:{
            type:String,
            required:[true,"please upload product images"],
        },
        createdAt:{
            type:Date,
            default:Date.now,
        },

    },
    {
        timestamps:true,
    }
);
module.exports =mongoose.model("product",productSchema);