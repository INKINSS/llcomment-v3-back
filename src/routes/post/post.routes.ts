import express from 'express';

const postRouter = express.Router();

import { getAllPost } from '../../controllers';

postRouter.get('/', getAllPost);

export default postRouter;
