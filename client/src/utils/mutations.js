import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $first_name: String!, $last_name: String!, $phone: String!) {
    addUser(username: $username, email: $email, password: $password, first_name: $first_name, last_name: $last_name, phone: $phone) {
      token
      user {
        _id
        username
      }
    }
  }
`;
