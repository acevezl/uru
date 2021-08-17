import gql from 'graphql-tag';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      first_name
      last_name
      phone
    }
  }
`;
