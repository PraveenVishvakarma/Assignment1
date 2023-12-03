import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs'

export const updateUser=async (req, res, next)=>{
    if(req.user.id !== req.params.id) return next(errorHandler(401, "You can update only your account"));
    try{
        if(req.body.password){
            req.body.password=bcryptjs.hashSync(req.body.password, 10);
        }
        const updatedUser= await User.findByIdAndUpdate(req.params.id, {
            $set:{
                username:req.body.username,
                name:req.body.name,
                bio:req.body.bio,
                age:req.body.age,
                password:req.body.password,
            }
        },{new:true});
        const {password:pass, ...rest}=updatedUser._doc;
        res.status(200).json(rest);
    } catch(error){
        next(error);
    }
};

export const deleteUser=async (req, res, next)=>{
    const { password } = req.body;
    try{
        
        const user = await User.findById(req.user.id);
        console.log(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
            
        if(req.user.id !== req.params.id) return next(errorHandler(401, "You can only delete yourself"));
        const isPasswordValid = await bcryptjs.compare(password, user.password);

        if(isPasswordValid){
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted successfully! ");
        }
        else{
            next(errorHandler(401, "Invalid password!"));
        }

    } catch(error){
        next(error);
    }
};

export const getUser=async(req, res, next)=>{
    try{
        const user=await User.findById(req.params.id);

        if(!user) return next(errorHandler(404, 'User does not exist!'));
        const{password:pass, ...rest}=user._doc;

        res.status(200).json(rest);
    }
    catch(error){
        next(error);
    }

}