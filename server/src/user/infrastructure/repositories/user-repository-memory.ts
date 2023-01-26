import { CreateUser } from "../../domain/create-user";
import { User } from "../../domain/user";
import { UserRepository } from "./../../domain/user-repository";

export function defineUserRepositoryMemory(): UserRepository {
  return {
    async createUser(input: CreateUser): Promise<User> {
      return {
        id: "",
        email: input.email,
        firstName: "",
        lastName: "",
        password: input.password,
      };
    },
  };
}
