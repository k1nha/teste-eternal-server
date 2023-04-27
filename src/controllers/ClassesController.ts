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
}
