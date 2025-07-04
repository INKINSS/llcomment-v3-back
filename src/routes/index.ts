import { Router } from 'express';
import postRoutes from './post/post.routes';
import publicRoutes from './public/publics.routes';
import userRoutes from './user/user.routes';

const router = Router();

router.use('/public', publicRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);

export default router;
