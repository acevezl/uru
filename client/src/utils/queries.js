import gql from "graphql-tag";

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

export const QUERY_THERAPISTS_CRITERIA = gql`
  query therapistcriteria($criteria: String) {
    therapistcriteria(filter:{or:[{specialties: $criteria},{skills: $criteria}]}) {
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
  {
    therapists {
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
