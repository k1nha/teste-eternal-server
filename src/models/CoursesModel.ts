import { Courses } from '../database/schemas';
import { ICourses } from '../types/SchemaTypes';

class CoursesModel {
  async getAllCourses() {
    try {
      const courses = await Courses.find();

      return courses;
    } catch (err) {
      console.error(err);
    }
  }

  async createCourses(body: ICourses) {
    try {
      const createdCourse = await Courses.create(body);

      return createdCourse;
    } catch (err) {
      console.error(err);
    }
  }

  async updateCourses(data: ICourses, id: string) {
    try {
      const updatedCourse = await Courses.updateOne(
        {
          _id: id,
        },
        data,
      );

      return updatedCourse;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteCourses(id: string) {
    try {
      const deletedResponse = await Courses.findOneAndDelete({
        _id: id,
      });

      return deletedResponse;
    } catch (err) {
      console.error(err);
    }
  }
}

export default CoursesModel;
