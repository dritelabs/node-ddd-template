import { UpdateUser } from "../../domain/update-user";
import { UserRepository } from "../../domain/user-repository";

interface DefineUpdateUser {
  userRepository: UserRepository;
}

export function defineUpdateUser({ userRepository }: DefineUpdateUser) {
  return async function updateUser(input: UpdateUser) {
    return userRepository.updateUser(input);
  };
}
