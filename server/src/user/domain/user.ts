export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class User implements IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor({ id, firstName, lastName, email, password }: IUser) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}