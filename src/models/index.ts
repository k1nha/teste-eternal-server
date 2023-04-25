import mongoose from 'mongoose';

const { Schema } = mongoose;

const user = new Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const student = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const courses = new Schema({});

const classes = new Schema({});

export { user, student, classes, courses };
