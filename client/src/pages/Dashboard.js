import React from "react";

<<<<<<< HEAD:client/src/pages/Home.js
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
=======
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
>>>>>>> 4167809be5abac9451a644f054d97024b0be5ed4:client/src/pages/Dashboard.js

import Auth from "../utils/auth";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_THERAPISTS } from "../utils/queries";
import TherapistList from "../components/TherapistList";

<<<<<<< HEAD:client/src/pages/Home.js
const Home = () => {
=======
import SearchBar from '../components/SearchBar';

const Dashboard = () => {

>>>>>>> 4167809be5abac9451a644f054d97024b0be5ed4:client/src/pages/Dashboard.js
  const { loading, data } = useQuery(QUERY_THERAPISTS);
  console.log(data);
  const therapists = data?.therapists || [];

  const loggedIn = Auth.loggedIn();

  return (
    <>
      <Container>
<<<<<<< HEAD:client/src/pages/Home.js
        <Row className="text-center my-4">
          <Col>
            <h1 style={{ color: "#69b4d4" }}>
              Let us help you find a Therapist for your child!
            </h1>
          </Col>
        </Row>
        <Row>
          <InputGroup className="mb-3 mx-auto" style={{ width: "75%" }}>
            <FormControl
              placeholder="Seach for a specialty..."
              className="mx-2"
            />
            <Button variant="outline-warning">Search</Button>{" "}
          </InputGroup>
        </Row>

=======
        <SearchBar></SearchBar>


        
>>>>>>> 4167809be5abac9451a644f054d97024b0be5ed4:client/src/pages/Dashboard.js
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

export default Dashboard;
