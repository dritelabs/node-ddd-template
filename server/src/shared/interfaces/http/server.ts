import http from "http";
import express from "express";
import { router as userRouter } from "./routes";

interface CreateServerOptions {
  context: any;
}

export function createServer(options: CreateServerOptions) {
  const app = express();
  const server = http.createServer(app);

  app.use("/users", userRouter);

  return server;
}
