import mongoose, { connect } from "mongoose";

const connectDB = async()=>
{
    mongoose.connection.on('connected',()=>
    {
        console.log('DB Connected')
    })
    await mongoose.connect(`${process.env.DB}/mern-ecomm`)
}

export default connectDB;