import { createServer } from "./shared/interfaces/grpc/server";

async function main() {
  const host = "0.0.0.0:9090";
  const server = createServer();
  await server.start(host);
}

main();
