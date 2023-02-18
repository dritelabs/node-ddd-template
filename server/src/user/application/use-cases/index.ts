import { UserRepository } from "../../domain/user-repository";
import { defineCreateUser } from "./create-user";
import { defineDeleteUser } from "./delete-user";
import { defineGetUserById } from "./get-user-by-id";
import { defineUpdateUser } from "./update-user";

interface DefineUserUseCases {
  userRepository: UserRepository;
}

export function defineUserUseCases({ userRepository }: DefineUserUseCases) {
  return {
    createUser: defineCreateUser({ userRepository }),
    deleteUser: defineDeleteUser({ userRepository }),
    defineGetUserById: defineGetUserById({ userRepository }),
    updateUser: defineUpdateUser({ userRepository }),
  };
}
