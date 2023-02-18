import { UpdateUser } from "./update-user";
import { CreateUser } from "./create-user";
import { User } from "./user";

export interface UserRepository {
  createUser(input: CreateUser): Promise<User>;
  getUserById(input: string): Promise<User>;
  updateUser(input: UpdateUser): Promise<User>;
  deleteUser(input: string): Promise<void>;
}
