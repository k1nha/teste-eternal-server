import { Finances, Frequency } from '../database/schemas';
import { IFrequency } from '../types/SchemaTypes';

class FrequencyModel {
  async getAllFrequency() {
    try {
      const allFrequency = await Frequency.find().populate(
        'id_Classes_Students',
      );
      return allFrequency;
    } catch (err) {
      console.error(err);
    }
  }

  async createFrequency(data: IFrequency) {
    try {
      const createdFrequency = await Frequency.create(data);

      if (data.details_status) {
        const justifyFrequencyFinance = await Finances.create({
          id_frequency: createdFrequency._id,
          payment_amount: 0,
          payment_type: 'Entrada',
          payment_status: 'Fechado',
        });
      } else {
        const createFinance = await Finances.create({
          id_frequency: createdFrequency._id,
        });
      }

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

      if (data.details_status) {
        const justifyFrequencyFinance = await Finances.create({
          id_frequency: id,
          payment_amount: 0,
          payment_type: 'Entrada',
          payment_status: 'Fechado',
        });
      }

      if (data.status == 'Ausente') {
        const registerFinance = await Finances.create({
          id_frequency: id,
        });
      }

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
