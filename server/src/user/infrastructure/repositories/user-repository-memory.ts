import { ICreateUser } from "../../domain/create-user";
import { User } from "../../domain/user";
import { UserRepository } from "./../../domain/user-repository";

export function defineUserRepositoryMemory(): UserRepository {
  return {
    async createUser(input: ICreateUser) {
      const user = new User({
        email: input.email,
        firstName: "",
        id: "",
        lastName: "",
        password: input.password,
      });

      return user;
    },
  };
}
