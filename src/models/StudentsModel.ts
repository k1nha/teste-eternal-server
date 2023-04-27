import { Student } from '../database/schemas/index';
import { IStudent } from '../types/SchemaTypes';

//TODO: type data

class StudentModel {
  async getAllStudents() {
    try {
      const allStudents = await Student.find();
      return allStudents;
    } catch (err) {
      console.error(`${err}`);
    }
  }

  async createStudent(data: IStudent) {
    try {
      const newStudent = await Student.create(data);
      return newStudent;
    } catch (err) {
      console.error(err);
    }
  }

  async getStudentById(id: string) {
    try {
      const singleStudent = await Student.findById({
        _id: id,
      });

      return singleStudent;
    } catch (err) {
      console.error(err);
    }
  }

  async updateStudent(data: IStudent) {
    try {
      const updateStudent = await Student.updateOne(data);

      return updateStudent;
    } catch (err) {
      console.error(`Could not update student. ${err}`);
    }
  }

  async deleteStudent(id: string) {
    try {
      const deletedResponse = await Student.findOneAndDelete({
        _id: id,
      });

      return deletedResponse;
    } catch (err) {
      console.error(err);
    }
  }
}

export default StudentModel;
