import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateGategoryController } from './controllers/category/CreateGategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

//--------rotas User--------
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)


//--------rotas Category--------
router.post('/category', isAuthenticated, new CreateGategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)


export { router };