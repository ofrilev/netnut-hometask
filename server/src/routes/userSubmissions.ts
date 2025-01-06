import { Router } from 'express';
import { postUserSubmission } from '../controllers/userSubmissionsController';

const router = Router();

router.post('/', postUserSubmission);

export default router;