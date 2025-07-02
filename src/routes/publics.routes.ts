import express from 'express'
const router = express.Router();
import { dashboard } from '../controllers';

router.get('/', dashboard);

export const publicRoutes = router;
