import { CreateUserRequest } from "./../../../infrastructure/proto/example_pb.d";
import { CreateUser } from "../../../../user/domain/create-user";

export function serializeCreateUser(options: CreateUserRequest) {
  return new CreateUser({
    email: options.getEmail(),
    password: options.getPassword(),
  });
}
