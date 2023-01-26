import {
  CreateUserRequest,
  User,
} from "../../../infrastructure/proto/example_pb";
import { Context, HandleUnaryCall } from "../../../../types";
import {
  serializeCreateUserEntity,
  serializeUserMessage,
} from "../serializers";

export const createUser: HandleUnaryCall<
  CreateUserRequest,
  User,
  Context
> = async (call, callback, context) => {
  const request = serializeCreateUserEntity(call.request);
  const created = await context.userUseCases.createUser(request);
  const response = serializeUserMessage(created);

  callback(null, response);
};
