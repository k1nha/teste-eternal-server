import { Classes } from '../database/schemas';
import { IClasses } from '../types/SchemaTypes';

class ClassesModel {
  async getAllClasses() {
    try {
      const allClasses = await Classes.find();
      return allClasses;
    } catch (err) {
      console.error(`${err}`);
    }
  }

  async createClasses(data: IClasses) {
    try {
      const newStudent = await Classes.create(data);
      return newStudent;
    } catch (err) {
      console.error(err);
    }
  }

  async updateClasses(data: IClasses) {
    try {
      const updateStudent = await Classes.updateOne(data);

      return updateStudent;
    } catch (err) {
      console.error(`Could not update student. ${err}`);
    }
  }

  async deleteClasses() {
    // Classes só podem ser deletadas se não possuirem frequência.
  }
}

export default ClassesModel;
