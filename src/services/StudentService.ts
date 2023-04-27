import { Student } from '../models/index';
import { IStudent } from '../types/SchemaTypes';

//TODO: type data

class StudentService {
  static async getAllStudents() {
    try {
      const allStudents = await Student.find();
      return allStudents;
    } catch (err) {
      console.error(`${err}`);
    }
  }

  static async createStudent(data: IStudent) {
    try {
      const newStudent = await Student.create(data);
      return newStudent;
    } catch (err) {
      console.error(err);
    }
  }

  static async getStudentById() {}

  static async updateStudent() {}

  static async deleteStudent(id: string) {
    try {
      const deletedResponse = await Student.findOneAndDelete({
        _id: id,
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export default StudentService;
