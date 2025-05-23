import { RESTDataSource } from "@apollo/datasource-rest";

export class UsersApi extends RESTDataSource {
  //override para borrar la baseurl por defecto
  override baseURL: string = "https://jsonplaceholder.typicode.com/";

  async getAllUsers() {
    const users = await this.get("users");
    return users;
  }
}
