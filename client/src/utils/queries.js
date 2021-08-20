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
      fileCount
      files {
        patient_name
        dob
        allergies
        notes
        therapist {
          first_name
          last_name
          phone
          specialties
          skills
        }
      }
    }
  }
`;

export const QUERY_THERAPIST = gql`
  query therapist($username: String!) {
    therapist(username: $username) {
      _id
      username
      email
      first_name
      last_name
      phone
      specialties
      skills
      photo
    }
  }
`;

export const QUERY_THERAPISTS = gql`
  query therapists($criteria: String) {
    therapist({$or:[{specialties: $criteria},{skills: $criteria}]}) {
      _id
      username
      email
      first_name
      last_name
      phone
      specialties
      skills
      photo
    }
  }
`;