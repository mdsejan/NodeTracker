export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'facalty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
