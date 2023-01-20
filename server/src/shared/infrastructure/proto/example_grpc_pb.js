// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var example_pb = require('./example_pb.js');

function serialize_example_package_CreateUserRequest(arg) {
  if (!(arg instanceof example_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type example_package.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_package_CreateUserRequest(buffer_arg) {
  return example_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_package_User(arg) {
  if (!(arg instanceof example_pb.User)) {
    throw new Error('Expected argument of type example_package.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_package_User(buffer_arg) {
  return example_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExampleService = exports.ExampleService = {
  createUser: {
    path: '/example_package.Example/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.CreateUserRequest,
    responseType: example_pb.User,
    requestSerialize: serialize_example_package_CreateUserRequest,
    requestDeserialize: deserialize_example_package_CreateUserRequest,
    responseSerialize: serialize_example_package_User,
    responseDeserialize: deserialize_example_package_User,
  },
};

exports.ExampleClient = grpc.makeGenericClientConstructor(ExampleService);
