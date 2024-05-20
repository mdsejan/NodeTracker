import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import { z } from 'zod';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData = req.body.student;

    // data validation using Joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // data validation using zod
    const zodparseData = studentValidationSchema.parse(studentData);

    const result = await StudentServices.createStudentIntoDB(zodparseData);

    // console.log({ error, value });
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something Went Wrong',
    //     error: error.details,
    //   });
    // }

    res.status(200).json({
      success: true,
      message: 'Student is Created Successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retireved Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
};
