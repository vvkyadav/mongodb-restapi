const mongoose = require("mongoose");

// This is now used in .env file
// const uri = "mongodb+srv://vivek:yiUWyYQ8NRsr40K2@vivekapi.xkwj4je.mongodb.net/VivekAPI?retryWrites=true&w=majority";


const connectDB = (uri) => {
    console.log("connectDB");
    mongoose.set('strictQuery', true)
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;