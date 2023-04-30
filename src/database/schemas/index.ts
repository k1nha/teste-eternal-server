import { model, Schema } from 'mongoose';
import {
  IClasses,
  ICourses,
  IFinances,
  IFrequency,
  IStudent,
  IUser,
  IClassesStudents,
} from '../../types/SchemaTypes';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const StudentSchema = new Schema<IStudent>(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['Masculino', 'Feminino'],
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true },
);
const ClassesSchemas = new Schema<IClasses>({
  name: {
    type: String,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
  },
  id_course: {
    type: Schema.Types.ObjectId,
    ref: 'Courses',
  },
});

const ClassesStudentsSchema = new Schema<IClassesStudents>({
  id_classes: {
    type: Schema.Types.ObjectId,
    ref: 'Classes',
  },
  id_student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
  },
  amount_class: {
    type: Number,
  },
});

const CoursesSchema = new Schema<ICourses>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const FrequencySchemas = new Schema<IFrequency>({
  id_Classes_Students: {
    type: Schema.Types.ObjectId,
    ref: 'ClassesStudents',
  },
  date: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['Presente', 'Ausente'],
  },
  details_status: {
    type: String,
  },
});

const FinanceSchemas = new Schema<IFinances>({
  id_frequency: {
    type: Schema.Types.ObjectId,
    ref: 'Frequency',
  },
  payment_date: {
    type: Date,
    default: Date.now,
  },
  payment_status: {
    type: String,
    enum: ['Aberto', 'Fechado', 'Cancelado'],
    default: 'Aberto',
  },
  payment_type: {
    type: String,
    enum: ['Entrada', 'Saída'],
    default: 'Entrada',
  },
  payment_amount: {
    type: Number,
    default: 0,
  },
});

UserSchema.pre('save', async function hash(next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = model<IUser>('User', UserSchema);
const Student = model<IStudent>('Student', StudentSchema);
const Courses = model<ICourses>('Courses', CoursesSchema);
const Classes = model<IClasses>('Classes', ClassesSchemas);
const Frequency = model<IFrequency>('Frequency', FrequencySchemas);
const Finances = model<IFinances>('Finances', FinanceSchemas);
const ClassesStudents = model<IClassesStudents>(
  'ClassesStudents',
  ClassesStudentsSchema,
);

export {
  User,
  Student,
  Courses,
  Classes,
  Frequency,
  Finances,
  ClassesStudents,
};
