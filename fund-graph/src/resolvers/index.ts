import { GraphQLError } from "graphql";
import { roles } from "../datasources/roles.data";

export const resolvers = {
  Query: {
    user: () => [],
    users: (_: any, args: any, contextValue: any, info: any) => {
      const { dataSources } = contextValue;
      return dataSources.usersAPI.getAllUsers();
      //   const { id } = args.id;
      //   const user = users.filter((user) => user.id === id);
      //   if (!user) {
      //     throw new GraphQLError(`User ${id} not found`, {
      //       extensions: {
      //         http: {
      //           status: 404,
      //         },
      //       },
      //     });
      //   }
      //   // filter es diferente a find ya que filter devuelve todos los que cumplan la condicion en un nuevo arreglo y find solo el primero que cumpla la condicion
      //   return user;
    },
    roles: () => roles,
  },
};
