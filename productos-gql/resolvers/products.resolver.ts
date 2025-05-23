let counter = 0;

export const productsQuery = {
  products: (_: any, args: any, contextValue: any, info: any) => {
    const { dataSources } = contextValue;
    return dataSources.productsAPI.getAllProducts();
  },
  product: (_: any, args: any, contextValue: any, info: any) => {
    const { dataSources } = contextValue;
    return dataSources.productsAPI.getProductById(args.id);
  },
};

export const productsCountQuery = {
  getCount: () => {
    return counter;
  },
};

export const productsMutation = {
  incrementCount: () => {
    counter += 1;
    return counter;
  },
  decrementCount: () => {
    counter -= 1;
    return counter;
  },
};
