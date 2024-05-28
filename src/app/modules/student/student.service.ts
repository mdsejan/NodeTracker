import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student); // build in static method

  const student = new Student(studentData);
  const result = await student.save(); // build in instance method (mongoose)
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
};
