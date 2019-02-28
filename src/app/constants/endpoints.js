import gql from 'graphql-tag';

// Guide: https://www.apollographql.com/docs/link/links/rest.html#rest

export const GET_USERS = gql`
  query getUsers {
    users @rest(method: "GET", type: "users", path: "/users") {
      id
      name
      username
      email
      company @type(name: "company") {
        name
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($id: String!) {
    user(id: $id) @rest(method: "GET", type: "user", path: "/users/{args.id}") {
      id
      name
      email
      company @type(name: "company") {
        name
      }
    }
  }
`;

export const GET_SETTINGS_BY_ID = gql`
  query getSettings($id: String) {
    settings(id: $id) @rest(method: "GET", type: "settings", path: "/todos/{args.id}") {
      title
      completed
    }
  }
`;
