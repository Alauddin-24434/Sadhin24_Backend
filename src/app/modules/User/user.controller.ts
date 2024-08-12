import { Request, Response } from "express";
import { userService } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";


const createGuest= async(req:Request, res:Response)=>{
    const {password, guest}= req.body;

    const result= await userService.createGuestIntoDB(password, guest);

    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Guest is created Successfully",
        data: result,
    })


}

export const userController={
    createGuest,
    
}