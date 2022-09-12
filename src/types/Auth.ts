// sign in
export type SignInData = {
  userName: string;
  password: string;
};

// register
export type RegisterData = {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
  identityCardNo: string;
  userFullName: string;
  gender: number;
  countryId: number;
  nationId: number | null;
  jobId: number | null;
  cityId: number | null;
  districtId: number | null;
  wardId: number | null;
  address: string;
  agreement: boolean;
  birthDate: Date;
};

export type CreateNewPasswordData = {
  newPassword: string;
  confirmNewPassword: string;
};
