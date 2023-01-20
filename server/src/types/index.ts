import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { defineUserUseCases } from "../user/application/use-cases";

export type HandleUnaryCall<Request, Response, Context> = (
  call: ServerUnaryCall<Request, Response>,
  callback: sendUnaryData<Response>,
  context: Context
) => void;

export interface Context {
  userUseCases: ReturnType<typeof defineUserUseCases>;
}
