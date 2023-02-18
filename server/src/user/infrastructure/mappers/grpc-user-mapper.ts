import { CreateUser } from "../../domain/create-user";
import { User } from "../../domain/user";
import { UserMapper } from "../../domain/user-mapper";
import {
  CreateUserRequest,
  User as UserMessage,
} from "../../../shared/infrastructure/proto/example_pb";

export function defineGrpcUserMapper(): UserMapper<
  User,
  CreateUserRequest,
  UserMessage
> {
  return {
    async mapToCreateUserRequest(input) {
      return {
        email: input.getEmail(),
        password: input.getPassword(),
      };
    },
    async mapToCreateUserResponse(input) {
      const message = new UserMessage();

      message.setEmail(input.email);
      message.setId(input.id);
      message.setFirstName(input.firstName!);
      message.setLastName(input.lastName!);
      message.setLastName(input.password);

      return message;
    },
  };
}
