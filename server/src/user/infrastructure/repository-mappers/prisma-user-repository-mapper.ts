import { UserRepositoryMapper } from "../../domain/user-repository-mapper";
import { CreateUser } from "../../domain/create-user";
import { User } from "../../domain/user";
import { UserMapper } from "../../domain/user-mapper";
import {
  CreateUserRequest,
  User as UserMessage,
} from "../../../shared/infrastructure/proto/example_pb";
import { Prisma } from "../../../shared/infrastructure/persistence/prisma";

export function definePrismaUserRepositoryMapper(): UserRepositoryMapper<Prisma.User> {
  return {
    mapToUser(input) {
      return {
        id: input.id,
        email: input.email,
        firstName: input.firstName!,
        lastName: input.lastName!,
        password: input.password,
      };
    },

    mapToUserModel(input) {
      return {
        id: input.id,
        email: input.email,
        firstName: input.firstName!,
        lastName: input.lastName!,
        password: input.password,
      };
    },
  };
}
