export const typeDefs = `
    type User {
        id: ID
        name: String
        email: String
       
    }

    input UserInput {
        id: ID
        name: String
        email: String
        role: String
    }

    type Role {
        name: String
    }
       
    type Query {
        users: [User]
        user: [User]
        roles: [Role]
    }
`;
// se coloca entre parentesis User para indicar que es un array y devuelve todos los datos que se esten buscando
