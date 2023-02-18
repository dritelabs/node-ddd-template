import {
  CreateUserRequest,
  User,
} from "../../../infrastructure/proto/example_pb";
import { Context, HandleUnaryCall } from "../types";
import { mapUserDomainToUserMessage } from "../../../../user/infrastructure/mappers";

export const createUser: HandleUnaryCall<
  CreateUserRequest,
  User,
  Context
> = async (call, callback, context) => {
  const request = await context.userMapper.mapToCreateUser(call.request);
  const created = await context.userUseCases.createUser(request);
  const response = mapUserDomainToUserMessage(created);

  callback(null, response);
};
