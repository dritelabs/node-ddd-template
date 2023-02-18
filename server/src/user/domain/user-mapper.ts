import { CreateUser } from "./create-user";

export interface UserMapper<CreateInput> {
  mapToCreateUser(input: CreateInput): Promise<CreateUser>;
}
