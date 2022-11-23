import { RobotsRepository } from './../data/robots.repository';
import { Router } from 'express';
import { UserController } from '../controllers/user.js';
import { UserRepository } from '../auth/repositories/user.js';

export const usersRouter = Router();

const controller = new UserController(
    UserRepository.getInstance(),
    new UserRepository()
);

usersRouter.post('/register', controller.register.bind(controller));
usersRouter.post('/login', controller.login.bind(controller));
