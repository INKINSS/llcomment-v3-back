import express from 'express';
import { dashboard } from '../../controllers';

const publicRouter = express.Router();

publicRouter.get('/', dashboard);

export default publicRouter;
