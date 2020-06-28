import { Router } from 'express';
import ProductController from './controllers/ProductController';

const routes = Router();

routes.get('/api', ProductController.list);
routes.post('/api', ProductController.create);

export default routes;
