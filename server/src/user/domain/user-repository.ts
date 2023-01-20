import { IUser } from "./user";
import { ICreateUser } from "./create-user";

export interface UserRepository {
  createUser(input: ICreateUser): Promise<IUser>;
}
