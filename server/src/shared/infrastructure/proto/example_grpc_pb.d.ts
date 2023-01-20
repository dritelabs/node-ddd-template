// package: example_package
// file: example.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as example_pb from "./example_pb";

interface IExampleService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IExampleService_ICreateUser;
}

interface IExampleService_ICreateUser extends grpc.MethodDefinition<example_pb.CreateUserRequest, example_pb.User> {
    path: "/example_package.Example/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<example_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<example_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<example_pb.User>;
    responseDeserialize: grpc.deserialize<example_pb.User>;
}

export const ExampleService: IExampleService;

export interface IExampleServer extends grpc.UntypedServiceImplementation {
    createUser: grpc.handleUnaryCall<example_pb.CreateUserRequest, example_pb.User>;
}

export interface IExampleClient {
    createUser(request: example_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: example_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: example_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: example_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.User) => void): grpc.ClientUnaryCall;
}

export class ExampleClient extends grpc.Client implements IExampleClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createUser(request: example_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: example_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: example_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: example_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.User) => void): grpc.ClientUnaryCall;
}
