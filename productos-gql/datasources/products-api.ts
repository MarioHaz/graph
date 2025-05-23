import { RESTDataSource } from "@apollo/datasource-rest";

export class ProductsApi extends RESTDataSource {
  //override para borrar la baseurl por defecto
  override baseURL: string = "http://localhost:3000/";

  async getAllProducts() {
    const { products } = await this.get("/products/");
    if (!products) {
      return [];
    }
    return products;
  }
  async getProductById(id: string) {
    const { product } = await this.get(`/products/${encodeURIComponent(id)}`);
    if (!product) {
      return null;
    }
    return product;
  }
  async createProduct(product: any) {
    const { product: newProduct } = await this.post("/products/", product);
    if (!newProduct) {
      return null;
    }
    return newProduct;
  }
}
