import { Response, Request } from 'express';
import StudentModel from '../models/StudentsModel';

const makeSut = () => {
  return new StudentModel();
};

class StudentController {
  async getAll(req: Request, res: Response) {
    try {
      const students = await makeSut().getAllStudents();

      if (!students) {
        return res.status(404).json({ message: 'Students not found' });
      }

      return res.status(200).send(students);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const body = req.body;

      const createStudent = await makeSut().createStudent(body);

      return res.status(201).json({ message: createStudent });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const params = req.params.id;
      const body = req.body;

      const updateStudent = await makeSut().updateStudent(body, params);

      if (updateStudent?.modifiedCount === 0) {
        throw new Error('Unable to update student, error occord');
      }

      return res.json(updateStudent);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const deleteStudent = await makeSut().deleteStudent(id);

      return res.json(deleteStudent);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default StudentController;
