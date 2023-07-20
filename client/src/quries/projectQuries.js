import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query GetProject {
    projects {
        id
        name
        status
        client{
          name
          phone
          email
        }
      }
  }
`;

export { GET_PROJECTS };