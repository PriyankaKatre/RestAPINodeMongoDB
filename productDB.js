import mongoose from 'mongoose'
import { connectDB } from './db/connect.js'
import dotEnv from 'dotenv'
import productsJson from "./products.json" assert { type: "json" };
import Product from "./models/products.js";

console.log("productsJson", productsJson);

dotEnv.config({ path: "./.env" });



const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        await Product.create(productsJson);
        console.log("success")
    }
    catch (error) {
        console.log(error)
    }
}

start();
