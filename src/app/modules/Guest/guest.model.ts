import { model, Schema } from "mongoose";
import { TGuest } from "./guest.interface";
import { User } from "../User/user.model";


// Define the schema
const guestSchema = new Schema<TGuest>({
    id: { type: String, required: true, unique: true },
    user:{type:Schema.Types.ObjectId,  required:true, unique:true, ref: User},
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true }
    },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true }
  });
  



  export const Guest= model<TGuest>('Guest', guestSchema)