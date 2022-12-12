const dotenv = require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductsJson = require("./produts.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        await Product.create(ProductsJson);
        console.log("Success Message from  DB");
    } catch (error) {
        console.log(error);
    }
}

start();