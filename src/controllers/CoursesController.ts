import CoursesModel from '../models/CoursesModel';
import { Request, Response } from 'express';

const makeSut = () => {
  return new CoursesModel();
};

class CoursesController {
  async getAll(req: Request, res: Response) {
    try {
      const courses = await makeSut().getAllCourses();

      if (!courses)
        return res.status(404).json({ message: 'Finances not found' });

      return res.status(200).send(courses);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
  async create(req: Request, res: Response) {
    try {
      const body = req.body;

      const createdCourse = await makeSut().createCourses(body);

      return res.status(201).json({ message: createdCourse });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const body = req.body;

      const updateCourses = await makeSut().updateCourses(body, id);

      if (updateCourses?.modifiedCount === 0)
        throw new Error('Unable to update student, error occord');

      return res.status(200).json(updateCourses);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default CoursesController;
