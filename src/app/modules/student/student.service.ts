import { Student } from './student.model';

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

export const StudentServices = {
  getAllStudentFromDB,
};
