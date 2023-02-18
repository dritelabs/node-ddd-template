import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  database: "some_db",
  dialect: "sqlite",
  username: "root",
  password: "",
  storage: ":memory:",
  models: [__dirname + "/models"], // or [Player, Team],
});

Object.freeze(sequelize);
