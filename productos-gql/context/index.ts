import { ProductsApi } from "../datasources/products-api";

export interface MyContext {
  dataSources: {
    productsAPI: ProductsApi;
  };
}
