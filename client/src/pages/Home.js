import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Auth from "../utils/auth";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_THERAPISTS } from "../utils/queries";
import TherapistList from "../components/TherapistList";

import SearchBar from '../components/SearchBar';

const Home = () => {

  const { loading, data } = useQuery(QUERY_THERAPISTS);
  console.log(data);
  const therapists = data?.therapists || [];

  const loggedIn = Auth.loggedIn();

  return (
    <>
      <Container>
        <SearchBar></SearchBar>
        {/* therapist cards, need to be conditionally rendered */}
        <Row>
          {loading ? (
            <div>Loading therapists...</div>
          ) : (
            <TherapistList therapists={therapists} />
          )}
        </Row>
      </Container>
    </>
  );
};

export default Home;
