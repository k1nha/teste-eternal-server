import { Finances, Student } from '../database/schemas';
import { IFincances } from '../types/SchemaTypes';

class FinanceModel {
  async getAllFinances() {
    try {
      const allFinances = await Finances.find();

      return allFinances;
    } catch (err) {
      console.error(err);
    }
  }

  async createFinance(data: IFincances) {
    try {
      const newFinance = await Finances.create(data);
      return newFinance;
    } catch (err) {
      console.error(err);
    }
  }

  async updateFinance(data: IFincances, id: string) {
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