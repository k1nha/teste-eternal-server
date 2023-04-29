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

  async create(req: Request, res: Response) {
    try {
      const body = req.body;
      const createFinances = await makeSut().createFinance(body);

      return res.status(201).json({ message: createFinances });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const body = req.body;
      const updateFinances = await makeSut().updateFinance(body, id);

      return res.status(200).json(updateFinances);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  // TODO:DELETE
  async delete(req: Request, res: Response) {}
}

export default FinanceController;
