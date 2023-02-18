import { UserRepository } from "../../domain/user-repository";

interface DefineGetUserById {
  userRepository: UserRepository;
}

export function defineGetUserById({ userRepository }: DefineGetUserById) {
  return async function getUserById(input: string) {
    return userRepository.getUserById(input);
  };
}
