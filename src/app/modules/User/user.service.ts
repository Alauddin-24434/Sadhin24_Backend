import { v4 as uuidv4 } from "uuid"; // Import UUID function
import { TGuest } from "../Guest/guest.interface";
import { TUser } from "./user.interface";
import mongoose from "mongoose";
import { User } from "./user.model";
import { Guest } from "../Guest/guest.model";



const createGuestIntoDB= async (password:string,payload:TGuest)=>{
// create a userDta object
const userData:Partial<TUser>= {};

// add password 
userData.password=password;

// set guestRole

userData.role='guest';
userData.id=uuidv4();

const session= await mongoose.startSession();

try {
    session.startTransaction();


  // create a user (transaction-1)
    const newUser= await User.create([userData],{session});
// check newUser
if(!newUser){
    throw new Error('Failed to create user');
}

// set id, _id as user

payload.id=newUser[0].id;
payload.user=newUser[0]._id;

 // create a guest (transaction-2)

 const newGuest= await Guest.create([payload],{session});

//  check newGuest 

if(!newGuest){
    throw new Error('Failed to create guest');

}

await session.commitTransaction();
await session.endSession();

return newGuest;


} catch (err:any) {
    await session.abortTransaction();
    await session.endSession();

    throw new Error(err);
}



}


export const userService={
    createGuestIntoDB,
}