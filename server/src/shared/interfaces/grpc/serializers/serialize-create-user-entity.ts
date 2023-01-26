import { CreateUser } from "../../../../user/domain/create-user";
import { CreateUserRequest } from "../../../infrastructure/proto/example_pb";

export function serializeCreateUserEntity(options: CreateUserRequest) {
  return new CreateUser({
    email: options.getEmail(),
    password: options.getPassword(),
  });
}
