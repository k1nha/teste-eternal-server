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
  description?: string;
}

interface IClasses {
  id_course: ICourses;
  name: string;
  start_date: Date;
  end_date?: Date;
}

interface IClassesStudents {
  id_classes: IClasses;
  id_student: IStudent;
  amount_class: number;
}

interface IFrequency {
  id_Classes_Students: IClassesStudents;
  date: Date;
  status: string; //Presente,Ausente
  details_status?: string; //<- Caso seja “Ausente”, sera necessário de informar se a ausência eh justificada.
}

interface IFinances {
  id_frequency: IFrequency;
  payment_status: string; //Aberto, Fechado e Cancelado
  payment_type: string; //Entrada ou saida
  payment_date: Date;
  payment_amount: number;
}

export {
  IClasses,
  IFinances,
  IStudent,
  IUser,
  IFrequency,
  ICourses,
  IClassesStudents,
};
