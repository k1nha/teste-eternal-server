import { Request, Response } from 'express';
import AuthModel from '../models/AuthModel';

const makeSut = () => {
  return new AuthModel();
};

// TODO: REFACTOR THIS
class AuthController {
  async create(req: Request, res: Response) {
    try {
      const body = req.body;

      const login = await makeSut().createUser(body);

      if (login == 'User already exists') {
        return res.status(400).json({ message: 'User already exists' });
      }

      return res.status(201).json({ message: login });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async getLogin(req: Request, res: Response) {
    try {
      const body = req.body;

      const login = await makeSut().getLogin(body);

      if (login == 'Users not found')
        return res.status(404).json({ message: 'User not found' });

      if (login == 'Invalid Password')
        return res.status(400).json({ message: 'Invalid Password' });

      return res.status(200).json({ message: login });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default AuthController;
