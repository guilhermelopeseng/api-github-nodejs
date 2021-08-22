import { Router } from 'express';
import userInfoRouter from './userinfo.routes';

const routes = Router();

routes.use('/user', userInfoRouter);

export default routes;
