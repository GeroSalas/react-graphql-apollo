import gql from 'graphql-tag';

// Guide: https://www.apollographql.com/docs/link/links/rest.html#rest

export const GET_USERS = gql`
  query getUsers {
    payload @rest(method: "GET", type: "payload", path: "/users") {
      name
      username
      email
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($id: String!) {
    payload(id: $id) @rest(method: "GET", type: "payload", path: "/users/{args.id}") {
      name
      email
    }
  }
`;

export const GET_SETTINGS_BY_ID = gql`
  query getSettings($id: String) {
    payload(id: $id) @rest(method: "GET", type: "payload", path: "/todos/{args.id}") {
      title
      completed
    }
  }
`;
