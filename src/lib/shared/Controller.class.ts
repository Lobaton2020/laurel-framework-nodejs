import { logger } from "../../app";
import { Response } from 'express'
export class Controller{
    protected logger:any = logger;

    catchError(err:any,res:Response){
        const { code, message, type, errors } = err;
        return res.json({ code, type, message, errors })
    }
}