import * as grpc from "@grpc/grpc-js";
import * as userControllers from "./controllers";

import {
  ExampleService,
  IExampleServer,
} from "../../infrastructure/proto/example_grpc_pb";
import { withContext } from "./with-context";

type Controller = keyof typeof userControllers;

interface CreateServerOptions {
  context: (call: grpc.ServerUnaryCall<any, any>) => Promise<any>;
}

export function createServer(options: CreateServerOptions) {
  const server = new grpc.Server();
  const controllers = { ...userControllers };
  const controllerKeys = Object.keys(controllers) as Controller[];

  const controllerMapped = controllerKeys.reduce((prev, current) => {
    let controller = userControllers[current];

    controller = withContext(controller, options.context);

    return Object.assign({}, prev, { [current]: controller });
  }, {}) as IExampleServer;

  server.addService(ExampleService, controllerMapped);

  return {
    start: defineStart(server),
  };
}

function defineStart(server: grpc.Server) {
  return function listen(
    host: string,
    callback: (error: Error | null, port: number) => void
  ) {
    server.bindAsync(host, grpc.ServerCredentials.createInsecure(), callback);
  };
}
