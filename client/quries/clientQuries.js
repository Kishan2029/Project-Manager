import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
  query GetClient {
    clients {
      name
      email
      id
      phone
    }
  }
`;

export { GET_CLIENTS };