import { UsersApi } from "../datasources/user.data";

export interface MyContext {
  dataSources: {
    usersAPI: UsersApi;
  };
}

// lo que se define aqui es forsozo si el campo no se tiene o se tiene despues, se agrega ? al final de la palabra
