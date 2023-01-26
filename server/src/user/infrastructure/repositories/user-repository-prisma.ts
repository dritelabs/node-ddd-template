import { CreateUser } from "../../domain/create-user";
import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";
import prisma from "../../../shared/infrastructure/prisma";

export function defineUserRepositoryPrisma(): UserRepository {
  return {
    async createUser(input: CreateUser): Promise<User> {
      const user = await prisma.user.create({
        data: {
          email: input.email,
          password: "",
        },
      });

      return {
        id: user.id,
        email: user.email,
        firstName: user.firstName!,
        lastName: user.lastName!,
        password: user.password,
      };
    },
  };
}
