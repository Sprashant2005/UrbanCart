const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const products = [
  {
    name: "Classic White Sneakers",
    category: "Sneakers",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    name: "Oversized Black Hoodie",
    category: "Men",
    price: 1799,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
  },
  {
    name: "Minimal White T-Shirt",
    category: "Women",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    name: "Classic Cap",
    category: "Accessories",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products inserted successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.error("Seeding failed:", error);
  }
}

seedDatabase();