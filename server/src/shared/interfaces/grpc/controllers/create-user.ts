import {
  CreateUserRequest,
  User,
} from "../../../infrastructure/proto/example_pb";
import { Context, HandleUnaryCall } from "../types";
import {
  mapCreateUserRequestMessageToCreateUserDomain,
  mapUserDomainToUserMessage,
} from "../../../../user/infrastructure/mappers";

export const createUser: HandleUnaryCall<
  CreateUserRequest,
  User,
  Context
> = async (call, callback, context) => {
  const payload = mapCreateUserRequestMessageToCreateUserDomain(call.request);
  const created = await context.userUseCases.createUser(payload);
  const response = mapUserDomainToUserMessage(created);

  callback(null, response);
};
