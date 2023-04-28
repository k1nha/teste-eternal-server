import { Response, Request } from 'express';
import FinanceModel from '../models/FinanceModel';

const makeSut = () => {
  return new FinanceModel();
};

class FinanceController {
  async getAll(req: Request, res: Response) {
    try {
      const finances = await makeSut().getAllFinances();

      if (!finances) {
        return res.status(404).json({ message: 'Finances not found' });
      }

      return res.status(200).send(finances);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default FinanceController;
