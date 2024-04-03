export class RegisterUserRequest {
  username: string;
  password: string;
  first_name: string;
  last_name?: string;
  email?: string;
  phone?: string;
}

export class UserResponse {
  username: string;
  first_name: string;
  last_name?: string;
  email?: string;
  phone?: string;
  token?: string;
}

export class LoginUserRequest {
  username: string;
  password: string;
}

export class UpdateUserRequest {
  first_name?: string;
  password?: string;
}
