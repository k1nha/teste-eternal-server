import { Courses } from '../database/schemas';
import { ICourses } from '../types/SchemaTypes';

class CoursesModel {
  static async getAllCourses() {
    try {
      const courses = await Courses.find();

      return courses;
    } catch (err) {
      console.error(err);
    }
  }

  static async createCourses(body: ICourses) {
    try {
      const createdCourse = await Courses.create(body);

      return createdCourse;
    } catch (err) {
      console.error(err);
    }
  }

  static async updateCourses(data: ICourses, id: string) {
    try {
      const updatedCourse = await Courses.findOneAndUpdate(
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

  static async deleteCourses(id: string) {
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
