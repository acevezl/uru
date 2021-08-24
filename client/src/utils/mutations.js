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

export const ADD_FILE = gql `
  mutation addFile($patient_name: String!, $dob: String!, $allergies: String!, $notes: String!, $therapist_id: String!) {
    addFile(patient_name: $patient_name, dob: $dob, allergies: $allergies, notes: $notes, therapist_id: $therapist_id) {
      patient_name
      dob
      allergies
      notes
      therapist_id
    }
  }
`

export const ADD_APPOINTMENT = gql `
  mutation addAppointment($date: String!, $time: String!, $notes: String!, $file_id: String!) {
    addAppointment(date: $date, time: $time, notes: $notes, file_id: $file_id) {
      date
      time
      notes
      file_id
    }
  }
`