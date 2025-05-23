import { RESTDataSource } from "@apollo/datasource-rest";
export class UsersApi extends RESTDataSource {
    constructor() {
        super(...arguments);
        //override para borrar la baseurl por defecto
        this.baseURL = "https://jsonplaceholder.typicode.com/";
    }
    async getAllUsers() {
        const users = await this.get("users");
        return users;
    }
}
