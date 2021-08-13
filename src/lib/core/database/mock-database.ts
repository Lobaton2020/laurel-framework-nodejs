export const database = {
    User:{
        users:[],
        findAll(){
            return this.users;
        },
        create(user:any){
            return this.users.push(user as never);
        },
    }
}