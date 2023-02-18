import { CreateUser } from "../../domain/create-user";
import { User } from "../../domain/user";
import { UserMapper } from "../../domain/user-mapper";
import {
  CreateUserRequest,
  User as UserMessage,
} from "../../../shared/infrastructure/proto/example_pb";

export function defineGrpcUserMapper(): UserMapper<CreateUserRequest> {
  return {
    async mapToCreateUser(arg) {
      return {
        email: arg.getEmail(),
        password: arg.getPassword(),
      };
    },
  };
}

export function mapUserDomainToUserMessage(options: User) {
  const message = new UserMessage();

  message.setEmail(options.email);
  message.setId(options.id);
  message.setFirstName(options.firstName!);
  message.setLastName(options.lastName!);
  message.setLastName(options.password);

  return message;
}
