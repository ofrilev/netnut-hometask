import { Router } from 'express';
import { getAddOns } from '../controllers/addonsController';

const router = Router();

router.get('/', getAddOns);

export default router;