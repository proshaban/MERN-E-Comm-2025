import express from 'express'
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

//app config
const app = express();
const port = process.env.port || 4000

//middlewares 
app.use(express.json());
app.use(cors())
connectDB()
connectCloudinary()

//api endpoints 
app.use('/api/user',userRouter);


app.get('/',(req,res)=>
{
    res.send('Hello API')
})




app.listen(port,()=>
{
    console.log("Server started on :",port);
})