type IUser = {
  ID: string;
  Phone: string;
  Email?: string;
  FullName: string;
  BirthDate?: string;
  Address?: string;
  Role?: 'dev' | 'admin' | 'teacher' | 'student' | 'parent' | 'other';
  Status?: 'active' | 'blocked' | 'other';
};
