import { CreateUser } from "./../../domain/create-user";
import { UserRepository } from "./../../domain/user-repository";

interface DefineCreateUser {
  userRepository: UserRepository;
}

export function defineCreateUser({ userRepository }: DefineCreateUser) {
  return async function createUser(input: CreateUser) {
    return userRepository.createUser(input);
  };
}
