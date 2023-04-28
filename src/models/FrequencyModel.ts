import { Frequency } from '../database/schemas';
import { IFrequency } from '../types/SchemaTypes';

class FrequencyModel {
  async getAllFrequency() {
    try {
      const allFrequency = await Frequency.find();
      return allFrequency;
    } catch (err) {
      console.error(err);
    }
  }

  async createFrequency(data: IFrequency) {
    try {
      const createdFrequency = await Frequency.create(data);
      return createdFrequency;
    } catch (err) {
      console.error(err);
    }
  }

  async updateFrequency(data: IFrequency, id: string) {
    try {
      const updatedFrequency = await Frequency.updateOne(
        {
          _id: id,
        },
        data,
      );
      return updatedFrequency;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteFrequency(id: string) {
    try {
      const deleteFrequency = await Frequency.findOneAndDelete({
        _id: id,
      });
      return deleteFrequency;
    } catch (err) {
      console.log(err);
    }
  }
}

export default FrequencyModel;
