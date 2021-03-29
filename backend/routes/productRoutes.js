import express from 'express'
import dotenv from 'dotenv';
import { getAllProducts, getProductById } from '../controllers/productControllers.js';
dotenv.config();
const router = express.Router();

router.get('/',getAllProducts)

router.get('/:id',getProductById)

export default router;