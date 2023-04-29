import { Classes } from '../database/schemas';
import { IClasses } from '../types/SchemaTypes';

class ClassesModel {
  async getAllClasses() {
    try {
      const allClasses = await Classes.find()
        .populate('id_course', 'name')
        .lean();
      return allClasses;
    } catch (err) {
      console.error(`${err}`);
    }
  }

  async createClasses(data: IClasses) {
    try {
      const createdClasse = await Classes.create(data);
      return createdClasse;
    } catch (err) {
      console.error(err);
    }
  }

  async updateClasses(data: IClasses, id: string) {
    try {
      const updatedClasses = await Classes.updateOne(
        {
          _id: id,
        },
        data,
      );

      return updatedClasses;
    } catch (err) {
      console.error(`Could not update student. ${err}`);
    }
  }

  async deleteClasses(id: string) {
    // Classes só podem ser deletadas se não possuirem frequência.
  }
}

export default ClassesModel;
