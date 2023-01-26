import { CreateUser } from "../../domain/create-user";
import { User } from "../../domain/user";
import { UserRepository } from "./../../domain/user-repository";

export function defineUserRepositorySequelize(): UserRepository {
  return {
    async createUser(input: CreateUser): Promise<User> {
      return {
        email: input.email,
        firstName: "",
        id: "",
        lastName: "",
        password: input.password,
      };
    },
  };
}
