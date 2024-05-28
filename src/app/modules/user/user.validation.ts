import { z } from 'zod';

const userValidationSchema = z.object({
  id: z.string().nonempty(),
  password: z
    .string()
    .nonempty()
    .max(20, { message: 'Password can not be more than 20 characters' }),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(['admin', 'student', 'facalty']),
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().optional().default(false),
});

export const Useralidation = { userValidationSchema };
