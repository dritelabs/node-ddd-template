import { Context, HandleUnaryCall } from "../../../../types";

import {
  CreateUserRequest,
  User,
} from "../../../infrastructure/proto/example_pb";
import { serializeCreateUser, serializeUser } from "../serializers";

export const createUser: HandleUnaryCall<
  CreateUserRequest,
  User,
  Context
> = async (call, callback, context) => {
  const request = serializeCreateUser(call.request);
  const created = await context.userUseCases.createUser(request);
  const response = serializeUser(created);

  callback(null, response);
};
