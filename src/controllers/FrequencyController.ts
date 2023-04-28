import { Request, Response } from 'express';
import FrequencyModel from '../models/FrequencyModel';

const makeSut = () => {
  return new FrequencyModel();
};

class FrequencyController {
  async getAll(req: Request, res: Response) {
    try {
      const allFrequency = await makeSut().getAllFrequency();

      if (!allFrequency) {
        return res.status(404).json({ message: 'Frequency not found' });
      }

      return res.status(200).send(allFrequency);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const body = req.body;

      const createdFrequency = await makeSut().createFrequency(body);

      return res.status(201).send(createdFrequency);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const body = req.body;
      const id = req.params.id;

      const updatedFrequency = await makeSut().updateFrequency(body, id);

      if (updatedFrequency?.modifiedCount === 0)
        throw new Error('Unable to update student, error occord');

      return res.status(200).send(updatedFrequency);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const deleteFrequency = await makeSut().deleteFrequency(id);

      return res.status(200).json(deleteFrequency);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default FrequencyController;
