import Joi from 'joi';

// Define Joi schema for UserName
const userNameSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/, { name: 'capitalize' })
    .messages({
      'any.required': 'FirstName is required',
      'string.base': 'FirstName must be a string',
      'string.empty': 'FirstName cannot be empty',
      'string.max': 'FirstName cannot be more than 20 characters',
      'string.pattern.base': 'FirstName must start with a capital letter',
    }),
  middleName: Joi.string().trim(),
  lastName: Joi.string()
    .pattern(/^[a-zA-Z]+$/)
    .messages({
      'string.pattern.base': 'LastName must contain only alphabetic characters',
    }),
});

// Define Joi schema for Guardian
const guardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'any.required': 'FatherName is required',
  }),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

// Define Joi schema for Local Guardian
const localGuardianSchema = Joi.object({
  guardianName: Joi.string().required(),
  guardianOccupation: Joi.string().required(),
  guardianContactNo: Joi.string().required(),
  guardianAddress: Joi.string().required(),
});

// Define Joi schema for Student
const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianSchema.required(),
  localGuardian: localGuardianSchema.required(),
  profileImage: Joi.string(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;
