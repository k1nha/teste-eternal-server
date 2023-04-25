import { Router, Request, Response } from 'express';

const router = Router();

// User
router.post('/auth/register', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

router.get('/auth/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

// Students

// Classes

// Courses

// Frequency

// Finances

export default router;
