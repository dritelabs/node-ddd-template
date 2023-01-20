import { UserRepository } from "../../domain/user-repository";
import { defineCreateUser } from "./create-user";

interface DefineUserUseCases {
  userRepository: UserRepository;
}

export function defineUserUseCases({ userRepository }: DefineUserUseCases) {
  return {
    createUser: defineCreateUser({ userRepository }),
  };
}
