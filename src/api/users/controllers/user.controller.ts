import { Request,Response } from 'express'
import { validateClassValidator } from '../../../lib/shared/ClassValidator.validate';
import { Controller } from '../../../lib/shared/Controller.class';
import { UserDto } from '../dtos/user.dto';
import { User } from '../dtos/user.interface';
import { UserService } from '../services/user.service';


export class UserController extends Controller{
    constructor(
        private readonly userService: UserService
    ){
        super();
    }

    getAll(req:Request, res:Response){
        this.logger.info("Consulta todos los usuarios")
        const users = this.userService.findAll();
        res.json(users)
    }

    async create(req:Request, res:Response){
        try{
            this.logger.info("Crear un usuario")
            const user = await validateClassValidator(UserDto,req.body) as User;
            this.userService.create(user)
            res.json(user)

        }catch(error){
            this.catchError(error, res);
        }
    }
}