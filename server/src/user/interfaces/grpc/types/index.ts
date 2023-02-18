import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { bootstrap } from "../../../../user";

export type HandleUnaryCall<Request, Response, Context> = (
  call: ServerUnaryCall<Request, Response>,
  callback: sendUnaryData<Response>,
  context: Context
) => void;

export type Context = ReturnType<typeof bootstrap>;
