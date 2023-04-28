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
  id_classes: number;
  id_students: IStudent;
  id_course: ICourses;
  start_date: Date;
  end_date: Date;
}

interface IFrequency {
  id_classes: IClasses;
  id_student: IStudent;
  date: Date;
  status: string; //Presente,Ausente
  details_status?: string; //<- Caso seja “Ausente”, sera necessário de informar se a ausência eh justificada.
}

interface IFincances {
  id_student: IStudent;
  id_classes: IClasses;
  payment_status: string; //Aberto, Fechado e Cancelado
  payment_type: string; //Entrada ou saida
  payment_date: Date;
  payment_amount: number;
}

export { IClasses, IFincances, IStudent, IUser, IFrequency, ICourses };
