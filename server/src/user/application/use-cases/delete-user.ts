import { UserRepository } from "../../domain/user-repository";

interface DefineDeleteUser {
  userRepository: UserRepository;
}

export function defineDeleteUser({ userRepository }: DefineDeleteUser) {
  return async function deleteUser(input: string) {
    return userRepository.deleteUser(input);
  };
}
