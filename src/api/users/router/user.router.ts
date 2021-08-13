import { Router } from 'express'
import { database } from '../../../lib/core/database/mock-database';
import { Execute } from '../../../lib/shared/Wrapper.function';
import { UserController } from '../controllers/user.controller';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from '../services/user.service';

export default (router:Router)=>{

    const repository = new UserRepository(database);
    const service = new UserService(repository);
    const controller = new UserController(service);

    router.get('/users', Execute(controller,'getAll'))
    router.post('/users', Execute(controller,'create'))
};