import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import checkToken from '../middlewares/tokenMiddleware';
import ClassesController from '../controllers/ClassesController';
import StudentController from '../controllers/StudentController';
import FinanceController from '../controllers/FinanceController';
import CoursesController from '../controllers/CoursesController';
import FrequencyController from '../controllers/FrequencyController';
import ClassesStudentsController from '../controllers/ClassesStudentsController';

const router = Router();
const Auth = new AuthController();
const Student = new StudentController();
const Classes = new ClassesController();
const Courses = new CoursesController();
const Finances = new FinanceController();
const Frequency = new FrequencyController();
const ClassesStudents = new ClassesStudentsController();

// User
router.post('/auth/register', Auth.create);

router.post('/auth/user', Auth.getLogin);

router.get('/auth/verify', checkToken);

// Students

router.get('/api/students', Student.getAll);

router.post('/api/students', Student.create);

router.put('/api/students/:id', Student.update);

router.delete('/api/students/:id', Student.delete);

// Classes

router.get('/api/classes', Classes.getAll);

router.post('/api/classes', Classes.create);

router.put('/api/classes/:id', Classes.update);

router.delete('/api/classes/:id', Classes.delete);

// Courses

router.get('/api/courses', Courses.getAll);

router.post('/api/courses', Courses.create);

router.put('/api/courses/:id', Courses.update);

router.delete('/api/courses/:id', Courses.delete);

// Frequency

router.get('/api/frequency', Frequency.getAll);

router.post('/api/frequency', Frequency.create);

router.put('/api/frequency:id', Frequency.update);

router.delete('/api/frequency/:id', Frequency.delete);

// Finances

router.get('/api/finances', Finances.getAll);

router.post('/api/finances', Finances.create);

router.put('/api/finances/:id', Finances.update);

router.delete('/api/finances/:id', Finances.delete);

// ClassesStudents

router.get('/api/classesstudents', ClassesStudents.getAll);

router.post('/api/classesstudents', ClassesStudents.create);

export default router;
