import gql from 'graphql-tag';

// Guide: https://www.apollographql.com/docs/link/links/rest.html#rest

export const GET_TODOS = gql`
  query getTodos {
    payload @rest(method: "GET", type: "payload", path: "/todos") {
      title
      completed
    }
  }
`;

export const GET_TODO_BY_ID = gql`
  query getTodosById($id: String) {
    payload(id: $id) @rest(method: "GET", type: "payload", path: "/todos/{args.id}") {
      title
      completed
    }
  }
`;
