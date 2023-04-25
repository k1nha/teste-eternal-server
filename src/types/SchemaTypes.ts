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
  phone: string;
}

interface ICourses {
  name: string;
  id_class: IClasses;
  description?: string;
}

interface IClasses {
  id_students: IUser;
  start_date: Date;
  end_date: Date;
}

interface IFrequency {
  id_class: IClasses;
  id_student: IStudent;
  date: Date;
  status: string; //Presente,Ausente
  details_status?: string; //<- Caso seja “Ausente”, sera necessário de informar se a ausência eh justificada.
}

interface IFincances {
  id_student: IStudent;
  id_course: ICourses;
  status_register: string; //Aberto, Fechado e Cancelado
  type_register: string; //Entrada ou saida
  number_classes: string;
}

export { IClasses, IFincances, IStudent, IUser, IFrequency, ICourses };
