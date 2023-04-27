import { User } from '../database/schemas';
import { CreateUser, UserAuth } from '../types';
import bcrypt from 'bcryptjs';
import * as env from 'dotenv';
import jwt from 'jsonwebtoken';

env.config();

// TODO: REFACTOR THIS
class AuthController {
  async create(body: CreateUser) {
    const { email } = body;

    if (await User.findOne({ email })) {
      return 'User already exists';
    }

    const user = await User.create(body);

    return user;
  }

  async getLogin(body: UserAuth) {
    const { email, password } = body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return 'Users not found';
    }
    const checkedPassword = await bcrypt.compare(password, user.password);

    if (!checkedPassword) {
      return 'Invalid Password';
    }

    const secret = process.env.SECRET_KEY || '';
    const token = jwt.sign(
      {
        id: user.id,
      },
      secret,
    );

    return { token, email };
  }
}

export default AuthController;
