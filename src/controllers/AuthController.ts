import { User } from '../models';
import { CreateUser } from '../types';

class AuthController {
  async create(body: CreateUser) {
    const { email } = body;

    try {
      if (await User.findOne({ email })) {
        return 'User already exists';
      }

      const user = await User.create(body);
      
    } catch (err) {
      return err;
    }
  }
}

export default AuthController;
