import { validate } from "class-validator";
import { logger } from "../../app";
import { CLASS_VALIDATOR } from "../../config/app.config";
import { ValidateException } from "./exceptions/ValidateException";

const getMessages = (errors:any[],isLogger:boolean=false)=>{
    return errors.map(({ constraints })=>{
        return Object.entries(constraints).map(([ type, message ])=>isLogger ? `${message} : ${type}`: message)
    })
}

export const validateClassValidator = async (object:any,body:any)=>{
    const validator = Object.assign(new object(),body);
    const result:any[] = await validate(validator,CLASS_VALIDATOR)
    if(result.length > 0){
        logger.error("Error en validacion class-validator", getMessages(result,true))
        throw new ValidateException("400", "Error en validacion de datos", "error", getMessages(result))
    }
    return validator;
}