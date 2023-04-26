import { Request, Response, Router } from 'express';
import AuthController from '../controllers/AuthController';
import checkToken from '../middlewares/tokenMiddleware';

const router = Router();
const Auth = new AuthController();

// User
router.post('/auth/register', async (req: Request, res: Response) => {
  const user = await Auth.create(req.body);

  res.status(201).json({ message: user });
});

router.post('/auth/user', async (req: Request, res: Response) => {
  const userAuth = await Auth.getLogin(req.body);
  res.status(200).json({ message: userAuth });
});

router.get('/auth/verify', checkToken, async (req: Request, res: Response) => {
  res.status(200).json({ message: 'ok' });
});

// Students

// Classes

// Courses

// Frequency

// Finances

export default router;
