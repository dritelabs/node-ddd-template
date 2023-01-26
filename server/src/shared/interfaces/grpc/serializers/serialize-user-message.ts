import { User as UserModel } from "../../../../user/domain/user";
import { User } from "../../../infrastructure/proto/example_pb";

export function serializeUserMessage(options: UserModel) {
  const user = new User();

  user.setEmail(options.email);
  user.setId(options.id);
  user.setFirstName(options.firstName);
  user.setLastName(options.lastName);
  user.setLastName(options.password);

  return user;
}
