import { CreateUser } from "./create-user";
import { User } from "./user";

export interface UserRepository {
  createUser(input: CreateUser): Promise<User>;
}
