import express, { Router,Request, Response, NextFunction } from 'express'
import userRouter from './api/users/router/user.router';

export const logger = {
    info:(item:string)=>console.log(`[INFO][${item}]`),
    error:(item:string,error:any)=>console.log(`[ERROR][${item}]`,error),
    debug:(item:string,json:any)=>console.log(`[ERROR][${item}]`,json)
};

const app = express();
const router = Router();
app.use(express.json())
userRouter(router)
app.use(router)
app.use("*", (req:Request,res:Response)=>{
    return res.json({
        message: `path '${req.baseUrl} is not exist'`,
        type: "error"
    })
})

app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
    logger.error("Failed application ",err)
    return res.json({
        code: err.code,
        type: err.type,
        message: err.message,
        errors: err.error || [],
    })
})

app.listen(process.env.PORT || 3000, () => {
    logger.info(`SERVER RUNNING IN PORT: ${process.env.PORT || 3000}`)
})