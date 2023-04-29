import { ClassesStudents } from '../database/schemas';
import { IClassesStudents } from '../types/SchemaTypes';

class ClassesStudentsModel {
  async getAllClassesStudent() {
    try {
      // const classesStudents = await ClassesStudents.find().populate(
      //   'id_classes id_student',
      // ); POPULATE TWO OR MORE TABLES

      const classesStudents = await ClassesStudents.find()
        .populate('id_classes', 'name')
        .populate('id_student', 'name')
        .lean();

      return classesStudents;
    } catch (err) {
      console.error(err);
    }
  }
  async createClassesStudent(data: IClassesStudents) {
    try {
      const createdClassesStudents = await ClassesStudents.create(data);

      return createdClassesStudents;
    } catch (err) {
      console.error(err);
    }
  }
}

export default ClassesStudentsModel;
