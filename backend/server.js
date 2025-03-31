import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js"
import productRoutes from "./routes/product.route.js"
import cors from 'cors'


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json()); //allows us to accept JSON data in the req.body
  
app.use("/api/products", productRoutes);

app.listen(PORT, ()=> {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
})
