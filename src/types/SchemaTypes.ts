interface IUser {
  email: string;
  password: string;
  role: string;
  created_at: Date;
}

interface IStudent {
  name: string;
  age: string;
  gender: string;
}

interface ICourses {
  name: string;
  class: IClasses;
  duration: string;
}

interface IClasses {
  students: IUser[];
}

interface IFrequency {}

interface IFincances {}

export { IClasses, IFincances, IStudent, IUser, IFrequency, ICourses };
