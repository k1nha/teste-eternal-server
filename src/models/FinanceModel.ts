import { Finances, Student } from '../database/schemas';
import { IFinances } from '../types/SchemaTypes';

class FinanceModel {
  async getAllFinances() {
    try {
      const allFinances = await Finances.find().populate({
        path: 'id_frequency',
        populate: {
          path: 'id_Classes_Students',
          model: 'ClassesStudents',
          populate: [
            {
              path: 'id_student',
              model: 'Student',
            },
            {
              path: 'id_classes',
              model: 'Classes',
            },
          ],
        },
      });

      return allFinances;
    } catch (err) {
      console.error(err);
    }
  }

  async createFinance(data: IFinances) {
    try {
      const newFinance = await Finances.create(data);
      return newFinance;
    } catch (err) {
      console.error(err);
    }
  }

  async updateFinance(data: IFinances, id: string) {
    try {
      const updateFinance = await Finances.updateOne(
        {
          _id: id,
        },
        data,
      );
      return updateFinance;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteStudent(id: string) {
    try {
      const deleteResponse = await Student.findOneAndDelete({
        _id: id,
      });

      return deleteResponse;
    } catch (err) {
      console.error(err);
    }
  }
}

export default FinanceModel;
