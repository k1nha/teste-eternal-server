import ClassesStudentsModel from '../models/ClassesStudentModel';
import { Request, Response } from 'express';

const makeSut = () => {
  return new ClassesStudentsModel();
};

class ClassesStudentsController {
  async getAll(req: Request, res: Response) {
    try {
      const classesStudents = await makeSut().getAllClassesStudent();

      if (!classesStudents)
        return res.status(404).json({ message: 'Classes Students not found' });

      return res.status(200).send(classesStudents);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default ClassesStudentsController;
