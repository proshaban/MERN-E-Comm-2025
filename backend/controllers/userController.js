import jwt from "jsonwebtoken";
import prisma from "../utils/prisma.js"
import bcrypt from "bcrypt"

// Route for user login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (!existingUser) {
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);

        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }

        // Ensure JWT_SECRET is set
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }

        // Create token
        const token = jwt.sign(
            { userId: existingUser.id, email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.status(200).json({ success: true, token });
    } 
    catch (err) {
        console.error('Login Error:', err);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};


//route for user registration
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User Already Exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                cartData: {} // Default empty object
            }
        });

        return res.status(201).json({
            success: true,
            message: 'User Registered Successfully',
            user: { id: newUser.id, name: newUser.name, email: newUser.email }
        });

    } catch (err) {
        console.error('Registration Error:', err);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

//route for admin login
const adminLogin = async (req, res) => {

}

export { login, register, adminLogin }  