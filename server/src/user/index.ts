import { defineUserUseCases } from "./application/use-cases";
import { defineUserRepository } from "./infrastructure/repositories";

interface BootstrapOptions {
  repository: "memory" | "prisma" | "sequelize";
}

export function bootstrap(options: BootstrapOptions) {
  const userRepository = defineUserRepository(options.repository);
  const userUseCases = defineUserUseCases({ userRepository });

  return {
    userUseCases,
  };
}
