import { User } from "./user";

export interface UserRepositoryMapper<ModelType> {
  mapToUserModel(input: User): ModelType;
  mapToUser(input: ModelType): User;
}
