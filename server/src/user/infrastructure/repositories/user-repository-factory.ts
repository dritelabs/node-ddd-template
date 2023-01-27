import { defineMemoryUserRepository } from "./memory-user-repository";
import { definePrismaUserRepository } from "./prisma-user-repository";
import { defineSequelizeUserRepository } from "./sequelize-user-repository";

export function defineUserRepository(
  repository: "memory" | "prisma" | "sequelize"
) {
  return {
    memory: defineMemoryUserRepository,
    prisma: definePrismaUserRepository,
    sequelize: defineSequelizeUserRepository,
  }[repository]();
}
