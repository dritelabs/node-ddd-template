import {
  CreateUserRequest,
  User,
} from "../../../infrastructure/proto/example_pb";
import { Context, HandleUnaryCall } from "../types";

export const createUser: HandleUnaryCall<
  CreateUserRequest,
  User,
  Context
> = async (call, callback, context) => {
  const request = await context.userMapper.mapToCreateUserRequest(call.request);
  const created = await context.userUseCases.createUser(request);
  const response = await context.userMapper.mapToCreateUserResponse(created);

  callback(null, response);
};
