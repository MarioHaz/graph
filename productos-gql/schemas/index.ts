export const typeDefs = `
    type Product {
      id: ID
      name: String
      price: Float
      stock: Int
      createdAt: String
      updatedAt: String
    }

    type Query {
      products: [Product]
      product(id: ID): Product
      getCount: Int
    }

    type Mutation {
      incrementCount: Int
      decrementCount: Int
    }
  `;
