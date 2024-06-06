import { z } from 'zod';

// Define Zod schema for UserName
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, { message: 'FirstName can not be more than 20 characters' })
    .refine(
      (value) => {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      { message: 'FirstName is not in Capitalize format' },
    ),
  middleName: z.string().optional(),
  lastName: z.string().refine((value) => /^[a-zA-Z]+$/.test(value), {
    message: 'LastName must contain only alphabetic characters',
  }),
});

// Define Zod schema for Guardian
const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty('FatherName is required'),
  fatherOccupation: z.string().nonempty(),
  fatherContactNo: z.string().nonempty(),
  motherName: z.string().nonempty(),
  motherOccupation: z.string().nonempty(),
  motherContactNo: z.string().nonempty(),
});

// Define Zod schema for Local Guardian
const localGuardianValidationSchema = z.object({
  guardianName: z.string().nonempty(),
  guardianOccupation: z.string().nonempty(),
  guardianContactNo: z.string().nonempty(),
  guardianAddress: z.string().nonempty(),
});

// Define Zod schema for Student
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.date().optional(),
      email: z.string().email({ message: '{VALUE} is not a valid Email' }),
      contactNo: z.string().nonempty(),
      emergencyContactNo: z.string().nonempty(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().nonempty(),
      permanentAddress: z.string().nonempty(),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImage: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
