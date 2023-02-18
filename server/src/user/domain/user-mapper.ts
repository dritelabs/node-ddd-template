import { CreateUser } from "./create-user";

export interface UserMapper<DomainType, RequestType, ResponseType> {
  mapToCreateUserRequest(input: RequestType): Promise<CreateUser>;
  mapToCreateUserResponse(input: DomainType): Promise<ResponseType>;
}
