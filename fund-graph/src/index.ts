import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs/index.js";
import { resolvers } from "./resolvers/index.js";
import { MyContext } from "./context/index.js";
import { UsersApi } from "./datasources/user.data.js";

// inicializar el servidor, se pasa el tipo de definiciones y los resolvers
const server = new ApolloServer<MyContext>({ typeDefs, resolvers });

// por que url (viene a ser el puerto donde se ejecuta el servidor), se pasa el servidor y se le indica que escuche en el puerto 4000
const { url } = await startStandaloneServer(server, {
  listen: { port: parseInt(process.env.PORT || "4000") },
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        usersAPI: new UsersApi({ cache }),
      },
    };
  },
});

console.log(`🚀 Server ready at: ${url}`);
