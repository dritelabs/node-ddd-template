import { UserRepository } from "../../domain/user-repository";

export function defineSequelizeUserRepository(): UserRepository {
  return {
    createUser(input) {
      throw Error("No implemented");
    },
    getUserById(input) {
      throw Error("No implemented");
    },
    updateUser(input) {
      throw Error("No implemented");
    },
    deleteUser(input) {
      throw Error("No implemented");
    },
  };
}
