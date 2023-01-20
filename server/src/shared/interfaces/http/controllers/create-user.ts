import { RequestHandler } from "express";

export const createUser: RequestHandler = async (req, res, next) => {
  // const request = serializeCreateUser(call.request);
  // const created = await context.userUseCases.createUser(request);
  // const response = serializeUser(created);

  const response = {};

  res.status(200).send(response);
};
