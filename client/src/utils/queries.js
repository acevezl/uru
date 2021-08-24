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
      files {
        _id
        patient_name
        dob
        allergies
        notes
        therapist_id
      }
    }
  }
`;

export const QUERY_THERAPIST = gql`
  query therapist($id: ID!) {
    therapist(_id: $id) {
      _id
      username
      email
      first_name
      last_name
      phone
      specialties
      skills
      photo
      bio
    }
  }
`;

export const QUERY_THERAPISTS_CRITERIA = gql`
  query therapistcriteria($criteria: String!) {
    therapistcriteria(criteria: $criteria) {
      _id
      username
      email
      first_name
      last_name
      phone
      specialties
      skills
      photo
      bio
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
      bio
    }
  }
`;

export const QUERY_FILE = gql`
query file($id: ID!) {
  file(_id: $id) {
    _id
    patient_name
    dob
    allergies
    notes
    therapist_id
    appointments {
      date
      time
      notes
    }
  }
}
`;