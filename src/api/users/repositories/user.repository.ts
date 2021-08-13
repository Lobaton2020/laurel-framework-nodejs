import { User } from "../dtos/user.interface";

export class UserRepository{
    private User:any;
    constructor(database:any){
        this.User = database.User;
    }

    findAll(){
        return this.User.findAll();
    }

    create(user:User){
        return this.User.create(user);
    }
}