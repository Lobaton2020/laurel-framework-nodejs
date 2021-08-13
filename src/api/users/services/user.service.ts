import { User } from "../dtos/user.interface";
import { UserRepository } from "../repositories/user.repository";

export class UserService{

    constructor(
        private readonly userRepository:UserRepository
    ){}

    findAll(){
        return this.userRepository.findAll();
    }

    create(user:User){
        return this.userRepository.create(user);
    }
}