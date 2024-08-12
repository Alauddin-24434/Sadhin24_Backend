import httpStatus from 'http-status';
import { NextFunction, Request, Response } from "express";


export const notFound=(req:Request, res:Response, next: NextFunction)=>{
res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API Not Found !!',
    error: '',
})
}