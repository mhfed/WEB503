import { Router } from 'express';
import { List, SignIn, SignUp } from '../controllers/user';

const router = Router();

router.post('/signup', SignUp);
router.get('/signin', SignIn);
router.get('/', List);
export default router;