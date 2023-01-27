import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { HandleUnaryCall } from "./types";

type ContextCallback<Request, Response, Context> = (
  call: ServerUnaryCall<Request, Response>
) => Promise<Context>;

export function withContext<Request, Response, Context>(
  func: HandleUnaryCall<Request, Response, Context>,
  context: ContextCallback<Request, Response, Context>
) {
  return async function (
    call: ServerUnaryCall<Request, Response>,
    callback: sendUnaryData<Response>
  ) {
    const ctx = await context(call);

    func(call, callback, ctx);
  };
}
