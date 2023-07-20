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

const GET_PROJECT = gql`
  query GetProject($id: ID!) {
    project(id:$id) {
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

export { GET_PROJECTS, GET_PROJECT };