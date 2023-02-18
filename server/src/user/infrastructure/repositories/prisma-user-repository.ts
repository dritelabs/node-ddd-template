import { UserRepository } from "../../domain/user-repository";
import { prisma } from "../../../shared/infrastructure/persistence/prisma";
import { defineBcryptEncoder } from "../../../shared/infrastructure/encoder/bcrypt";
import { definePrismaUserRepositoryMapper } from "../repository-mappers/prisma-user-repository-mapper";

export function definePrismaUserRepository(): UserRepository {
  const encoder = defineBcryptEncoder();
  const mapper = definePrismaUserRepositoryMapper();

  return {
    async createUser(input) {
      const hash = await encoder.hash(input.password);
      const user = await prisma.user.create({
        data: {
          email: input.email,
          password: hash,
        },
      });

      return mapper.mapToUser(user);
    },

    async getUserById(input) {
      const user = await prisma.user.findFirstOrThrow({
        where: { id: input },
      });

      return mapper.mapToUser(user);
    },

    async updateUser({ id, ...rest }) {
      const user = await prisma.user.update({
        where: { id },
        data: {
          ...rest,
        },
      });

      return mapper.mapToUser(user);
    },

    async deleteUser(input) {
      await prisma.user.delete({
        where: { id: input },
      });
    },
  };
}
