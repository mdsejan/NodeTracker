import { Schema, model, connect, Model } from 'mongoose';

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TlocalGuardian = {
  guardianName: string;
  guardianOccupation: string;
  guardianContactNo: string;
  guardianAddress: string;
};

export type TStudent = {
  id: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TlocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
};

export type studentMethods = {
  isUserExists(id: string): Promise<TStudent | null>;
};

export type StudentModel = Model<TStudent, {}, studentMethods>;
