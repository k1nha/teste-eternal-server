import { Request, Response, NextFunction } from 'express';
import * as env from 'dotenv';
import jwt from 'jsonwebtoken';

env.config();

function checkToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  try {
    const secret = process.env.SECRET_KEY || '';

    const verify = jwt.verify(token, secret);

    return res.status(200).json(verify);
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
}

export default checkToken;
