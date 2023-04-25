import { Router, Request, Response } from 'express';

const router = Router();

routes.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

export default router;
