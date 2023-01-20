import * as grpc from "@grpc/grpc-js";
import * as controllers from "./controllers";

import {
  ExampleService,
  IExampleServer,
} from "../../infrastructure/proto/example_grpc_pb";
import { HandleUnaryCall } from "../../../types";

type Controller = keyof typeof controllers;

type ContextCallback<Request, Response, Context> = (
  call: grpc.ServerUnaryCall<Request, Response>
) => Promise<Context>;

interface CreateServerOptions {
  context: (call: grpc.ServerUnaryCall<any, any>) => Promise<any>;
}

function withContext<Request, Response, Context>(
  func: HandleUnaryCall<Request, Response, Context>,
  context: ContextCallback<Request, Response, Context>
) {
  return async function (
    call: grpc.ServerUnaryCall<Request, Response>,
    callback: grpc.sendUnaryData<Response>
  ) {
    const ctx = await context(call);

    func(call, callback, ctx);
  };
}

export function createServer(options: CreateServerOptions) {
  const server = new grpc.Server();

  const controllerKeys = Object.keys(controllers) as Controller[];

  const controllerMapped = controllerKeys.reduce((prev, current) => {
    let controller = controllers[current];

    controller = withContext(controller, options.context);

    return Object.assign({}, prev, { [current]: controller });
  }, {}) as IExampleServer;

  server.addService(ExampleService, controllerMapped);

  return {
    listen: defineListen(server),
  };
}

function defineListen(server: grpc.Server) {
  return function listen(
    host: string,
    callback: (error: Error | null, port: number) => void
  ) {
    server.bindAsync(host, grpc.ServerCredentials.createInsecure(), callback);
  };
}
