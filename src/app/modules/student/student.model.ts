import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TStudent,
  StudentModel,
  TUserName,
  TlocalGuardian,
  studentMethods,
} from './student.interface';
import validator from 'validator';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'FirstName is required'],
    trim: true,
    maxlength: [20, 'FirstName can not be more than 20 characters'],
    // validate: {
    //   validator: function (value: String) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not in Capitalize formate',
    // },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    // },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, 'FatherName is required'],
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<TlocalGuardian>({
  guardianName: {
    type: String,
    required: true,
  },
  guardianOccupation: {
    type: String,
    required: true,
  },
  guardianContactNo: {
    type: String,
    required: true,
  },
  guardianAddress: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModel, studentMethods>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'User',
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not supported',
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: (value: string) => validator.isEmail(value),
    //   message: '{VALUE} is not a valid Email',
    // },
  },
  contactNo: { type: String, required: true, unique: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImage: { type: String },
});

export const Student = model<TStudent>('Student', studentSchema);
