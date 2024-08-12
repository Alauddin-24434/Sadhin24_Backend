import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";


const userSchema= new Schema<TUser>({
    id: {type:String, required:true, unique:true,},
    password: {type:String, required:true},
    role:{type:String, enum:['guest' , 'admin' , 'receptionist' ,'manager' ,'housekeeper']},
    status: {type:String, enum:['in-progress' , 'blocked'], default:'in-progress'},
    isDeleted:{type:Boolean, default:false}
},{timestamps:true});








export const User= model<TUser>('User', userSchema)