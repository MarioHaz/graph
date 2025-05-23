import {
  productsQuery,
  productsCountQuery,
  productsMutation,
} from "./products.resolver";

export const resolvers = {
  Query: {
    ...productsQuery,
    ...productsCountQuery,
  },
  Mutation: {
    ...productsMutation,
  },
};
