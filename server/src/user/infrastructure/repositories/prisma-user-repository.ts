import { CreateUser } from "../../domain/create-user";
import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";
import { prisma } from "../../../shared/infrastructure/persistence/prisma";
import { defineBcryptEncoder } from "../../../shared/infrastructure/encoder/bcrypt";
import { definePrismaUserRepositoryMapper } from "../repository-mappers/prisma-user-repository-mapper";

export function definePrismaUserRepository(): UserRepository {
  const encoder = defineBcryptEncoder();
  const mapper = definePrismaUserRepositoryMapper();

  return {
    async createUser(input: CreateUser): Promise<User> {
      const hash = await encoder.hash(input.password);

      const user = await prisma.user.create({
        data: {
          email: input.email,
          password: hash,
        },
      });

      return mapper.mapToUser(user);
    },
  };
}
