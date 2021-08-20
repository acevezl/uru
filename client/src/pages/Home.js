import React, { useState } from 'react';
import { Row, Container, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';

import Auth from "../utils/auth";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_THERAPISTS_CRITERIA } from "../utils/queries";
import TherapistList from "../components/TherapistList";

const Home = () => {
  const [searchText, setSearchText] = useState('');

  const { loading, data } = useQuery(QUERY_THERAPISTS_CRITERIA, {
    variables: { criteria: searchText }
  });

  const therapists = data?.therapistcriteria || [];

  return (
    <>
      <Container>
        <>
          <Row className='text-center my-4 col-12'>
              <Col><h1 style={{color: '#69b4d4'}}>Let us help you find a Therapist for your child...</h1></Col>
          </Row>
          <Row className='text-center my-4 col-12'>
              <Form onSubmit={setSearchText} className='col-12'>
                  <InputGroup className="mb-3 mx-auto" style={{ width: '75%' }} type='search'>
                  <FormControl 
                  name="searchText" placeholder="Seach for a specialty..." className='mx-2'
                  />
                  <Button variant="outline-warning">Search</Button>{' '}
                  </InputGroup>
              </Form>
          </Row>
        </>
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
