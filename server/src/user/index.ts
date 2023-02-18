import { defineUserUseCases } from "./application/use-cases";
import { defineUserRepository } from "./infrastructure/repositories";
import { defineUserMapper } from "./infrastructure/mappers";

interface BootstrapOptions {
  mapper: "grpc";
  repository: "memory" | "prisma" | "sequelize";
}

export function bootstrap(options: BootstrapOptions) {
  const userRepository = defineUserRepository(options.repository);
  const userMapper = defineUserMapper(options.mapper);
  const userUseCases = defineUserUseCases({ userRepository });

  return {
    userUseCases,
    userMapper,
  };
}
