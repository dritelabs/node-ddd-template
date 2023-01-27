import * as grpc from "@grpc/grpc-js";
import * as userControllers from "./controllers";

import {
  ExampleService,
  IExampleServer,
} from "../../infrastructure/proto/example_grpc_pb";
import { withContext } from "./with-context";
import { bootstrap } from "../../../user";

type Controller = keyof typeof userControllers;

export function createServer() {
  const server = new grpc.Server();
  const controllers = { ...userControllers };
  const controllerKeys = Object.keys(controllers) as Controller[];

  const controllerMapped = controllerKeys.reduce((prev, current) => {
    let controller = userControllers[current];

    controller = withContext(controller, context);

    return Object.assign({}, prev, { [current]: controller });
  }, {}) as IExampleServer;

  server.addService(ExampleService, controllerMapped);

  return {
    start(host: string) {
      server.bindAsync(
        host,
        grpc.ServerCredentials.createInsecure(),
        (err: Error | null, port: number) => {
          if (err) {
            console.error(`Server error: ${err.message}`);
          } else {
            console.log(`Server bound on port: ${port}`);
          }
        }
      );
    },
  };
}

async function context(_: grpc.ServerUnaryCall<any, any>) {
  return bootstrap({ repository: "prisma" });
}
