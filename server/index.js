
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

const app = express();
app.use(express.json());

app.get("/api/products", async(req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    } catch(error){
        res.status(500).json({
            message:"Failed to fetch products"
        });
    }
});

app.get("/", (req, res) => {
  res.send("UrbanCart backend is working!");
});
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error);
    });

app.listen(5000, () => {
  console.log("Server running on port 5000");
});