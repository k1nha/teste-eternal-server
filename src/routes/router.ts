import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import checkToken from '../middlewares/tokenMiddleware';
import ClassesController from '../controllers/ClassesController';
import StudentController from '../controllers/StudentController';

const router = Router();
const Auth = new AuthController();
const Student = new StudentController();
const Classes = new ClassesController();

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

// Courses

router.get('/api/courses');

router.post('/api/courses');

// Frequency

router.get('/api/frequency');

router.post('/api/frequency');

// Finances

router.get('/api/finances');

router.post('/api/finances');

export default router;
