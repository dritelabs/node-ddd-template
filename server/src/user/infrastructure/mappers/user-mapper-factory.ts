import { defineGrpcUserMapper } from "./grpc-user-mapper";

export function defineUserMapper(mapper: "grpc") {
  return {
    grpc: defineGrpcUserMapper,
  }[mapper]();
}
