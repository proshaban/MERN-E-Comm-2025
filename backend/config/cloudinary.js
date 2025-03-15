import {v2 as cloudinary} from "cloudinary"

const connectCloudinary = async()=>
{
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.ClOUDINARY_API,
        api_secret:process.env.ClOUDINARY_API_SECRET
    })
}

export default connectCloudinary;