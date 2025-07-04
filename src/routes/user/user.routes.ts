import { Router } from 'express';

const userRouter = Router();

import {
	createUser,
	getAllUsers,
	getUserById,
} from '../../controllers/users/users.controller';

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);

export default userRouter;
