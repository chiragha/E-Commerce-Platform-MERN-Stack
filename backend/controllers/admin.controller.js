import { Admin } from "../models/admin.model.js";
import bcrypt from "bcryptjs";
import * as z from "zod"; 
import jwt from "jsonwebtoken";
import config from "../config.js";

export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const adminSchema = z.object({
        firstName: z.string().min(3, { message: "First name must be at least 3 characters long" }),
        lastName: z.string().min(3, { message: "Last name must be at least 3 characters long" }),
        email: z.string().email({ message: "Invalid email format" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    });

    const validation = adminSchema.safeParse(req.body);

    if (!validation.success) {
        return res.status(400).json({
            message: "Validation Error",
            errors: validation.error.issues.map((err) => err.message),
        });
    }

    try {
        const existingAdmin = await Admin.findOne({ email });

        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new Admin({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        await newAdmin.save();

        res.status(201).json({
            message: "Admin created successfully",
            admin: newAdmin,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// admin login 

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email: email });
        const isPasswordValid = await bcrypt.compare(password, admin.password);  

        if (!admin || !isPasswordValid) {
            return res.status(403).json({ errors: "Invalid credentials" });
        }

        // jwt code 
        const token = jwt.sign(
            { id: admin._id,
               
             }, config.JWT_ADMIN_PASSWORD
        );
        res.cookie("jwt",token)
        res.status(201).json({
            message: "Login successful",
            admin: admin,
            token: token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}

// admin logout 
export const logout = (req, res) => {
   try {
    if(!req.cookies.jwt){
        return res.status(400).json({ message: "No active session kindly login" });
    }
     res.clearCookie("jwt");
    res.status(200).json({ message: "Logout successful" });
   } catch (error) {
     console.log(error);
     res.status(500).json({ message: "Server Error" });
   }
}

