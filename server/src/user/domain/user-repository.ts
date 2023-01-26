import { User } from "./user";
import { CreateUser } from "./create-user";

export interface UserRepository {
  createUser(input: CreateUser): Promise<User>;
}
