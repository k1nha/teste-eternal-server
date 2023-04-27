import { model, Schema } from 'mongoose';
import {
  IClasses,
  ICourses,
  IFincances,
  IFrequency,
  IStudent,
  IUser,
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
      // select: false,
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
  id_students: {
    type: Schema.Types.ObjectId,
    ref: 'Students',
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
});

const CoursesSchema = new Schema<ICourses>({
  id_class: {
    type: Schema.Types.ObjectId,
    ref: 'Classes',
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const FrequencySchemas = new Schema<IFrequency>({
  id_class: {
    type: Schema.Types.ObjectId,
    ref: 'Classes',
  },
  id_student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Presente', 'Ausente'],
  },
  details_status: {
    type: String,
  },
});

const FinanceSchemas = new Schema<IFincances>({
  id_student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
  },
  id_course: {
    type: Schema.Types.ObjectId,
    ref: 'Courses',
  },
  number_classes: {},
  status_register: {
    type: String,
    enum: ['Aberto', 'Fechado', 'Cancelado'],
    default: 'Aberto',
  },
  type_register: {
    type: String,
    enum: ['Entrada', 'Saída'],
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
const Finances = model<IFincances>('Finances', FinanceSchemas);

export { User, Student, Courses, Classes, Frequency, Finances };
