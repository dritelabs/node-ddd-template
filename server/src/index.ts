import { createServer } from "./shared/interfaces/grpc/server";
import { defineUserUseCases } from "./user/application/use-cases";
import { defineUserRepositoryMemory } from "./user/infrastructure/repositories";

const server = createServer({
  async context() {
    const userRepository = defineUserRepositoryMemory();
    const userUseCases = defineUserUseCases({ userRepository });

    return {
      userUseCases,
    };
  },
});

const host = "0.0.0.0:9090";

await server.listen(host, (err: Error | null, port: number) => {
  if (err) {
    console.error(`Server error: ${err.message}`);
  } else {
    console.log(`Server bound on port: ${port}`);
  }
});
