import User from "../models/User.js"
import bcrypt from "bcrypt"

// Generate JWT Token 

const generateToken = (userId)=>{

}


 
export const registerUser = async (req,res)=>{
    try{
        const {name,email,password} = req.body

        if(!name || !email || !password || password.length < 8 ){
             return res.json({success:false,message:'Fill all the fields'})
        }

        const userExits = await User.findOne({email})
        if(userExits){
            return res.json({success:false,message:'User already exits'})

        }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.create({name,email,password:hashedPassword})
    }
    catch (error) {

    }
}