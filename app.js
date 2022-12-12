const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5001;

const products_routes = require("./routes/products");
// const final_routes = require("./routes/final")

app.get("/", (req, res) => {
    res.send("Hi I am Live");
});

// middleware or to set router
app.use("/api/products", products_routes);
// app.use("/api/finals", final_routes)


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Yes i am connected http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
};

start();