import mongoose, { model } from 'mongoose';
import {
  IClasses,
  ICourses,
  IFincances,
  IFrequency,
  IStudent,
  IUser,
} from '../types/SchemaTypes';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const StudentSchema = new Schema<IStudent>({
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
  },
});

UserSchema.pre('save', async next => {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const CoursesSchema = new Schema<ICourses>({});

const ClassesSchemas = new Schema<IClasses>({});

const FrequencySchemas = new Schema<IFrequency>({});

const FinanceSchemas = new Schema<IFincances>({});

const User = model<IUser>('User', UserSchema);
const Student = model<IStudent>('Student', StudentSchema);
const Courses = model<ICourses>('Courses', CoursesSchema);
const Classes = model<IClasses>('Classes', ClassesSchemas);
const Frequency = model<IFrequency>('Frequency', FrequencySchemas);
const Finances = model<IFincances>('Finances', FinanceSchemas);

export { User, Student, Courses, Classes, Frequency, Finances };
