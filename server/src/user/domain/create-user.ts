export interface ICreateUser {
  email: string;
  password: string;
}

export class CreateUser implements ICreateUser {
  email: string;
  password: string;

  constructor({ email, password }: ICreateUser) {
    this.email = email;
    this.password = password;
  }
}
