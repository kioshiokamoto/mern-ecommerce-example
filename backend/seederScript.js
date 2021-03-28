import dotenv from 'dotenv';
dotenv.config();
import {products} from './data/products.js';

import connectDB from './config/db.js';
import Product from './models/Product.js';

connectDB();

const importData = async ()=>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log(`Data imported success`)
        process.exit();
    } catch (error) {
        console.log(`An error has occurred: ` + error);
        process.exit(1);
    }
}

importData();