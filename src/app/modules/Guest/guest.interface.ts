import { Types } from "mongoose";


export type TUserName={
    firstName:string;
    lastName:string;
}

export type TGuest={
    id:string;
    user:Types.ObjectId;
    name:TUserName;
    email:string;
    phoneNumber:string;
    address:string;
    city:string;
    country:string;
}