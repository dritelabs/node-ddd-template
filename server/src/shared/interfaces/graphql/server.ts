import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { defineUserUseCases } from "../../../user/application/use-cases";

import { definePrismaUserRepository } from "../../../user/infrastructure/repositories";

const typeDefs = `#graphql
  type User {
    title: String
    author: String
  }
  type Query {
    users: [User]
  }
`;

const users = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    users: () => users,
  },
};

export function createServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  return {
    async start(host: string) {
      const [_host, port] = host.split(":");

      const { url } = await startStandaloneServer(server, {
        listen: { host: _host, port: Number(port) },

        async context() {
          const userRepository = definePrismaUserRepository();
          const userUseCases = defineUserUseCases({ userRepository });

          return {
            userUseCases,
          };
        },
      });

      console.log(`🚀  Server ready at: ${url}`);
    },
  };
}
