import { Response, Request } from 'express';
import ClassesModel from '../models/ClassesModel';

const makeSut = () => {
  return new ClassesModel();
};
class ClassesController {
  async getAll(req: Request, res: Response) {
    try {
      const classes = await makeSut().getAllClasses();

      if (!classes)
        return res.status(404).json({ message: 'Classes not found' });

      return res.status(200).send(classes);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const body = req.body;

      const createdClasses = await makeSut().createClasses(body);

      return res.status(201).json({ message: createdClasses });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const params = req.params.id;
      const body = req.body;

      const updatedClasses = await makeSut().updateClasses(body, params);

      if (updatedClasses?.modifiedCount === 0) {
        throw new Error('Unable to update classes, error occord');
      }

      return res.status(201).json({ message: updatedClasses });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  // TODO: Model
  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const deleteClasses = await makeSut().deleteClasses(id);

      return deleteClasses;
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default ClassesController;
