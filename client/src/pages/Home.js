import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Auth from '../utils/auth';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_THERAPISTS } from '../utils/queries';
import TherapistList from '../components/TherapistList';

const Home = () => {

  const { loading, data } = useQuery(QUERY_THERAPISTS);
  const therapists = data?.therapists || [];

  const loggedIn = Auth.loggedIn();

  return (
    <>
      <Container>
        <Row className='text-center my-4'>
          <Col><h1 style={{color: '#69b4d4'}}>Let us help you find a Therapist for your child!</h1></Col>
        </Row>
        <Row>
          <InputGroup className="mb-3 mx-auto" style={{ width: '75%' }}>
            <FormControl
              placeholder="Seach for a specialty..." className='mx-2'
            />
            <Button variant="outline-warning">Search</Button>{' '}
          </InputGroup>
        </Row>
        
        {/* therapist cards, need to be conditionally rendered */}
        <Row>
          {
            loading ? (
              <div>Loading therapists...</div>
            ) : (
              <TherapistList therapists={therapists}/>
            )
          }
        </Row>
      </Container>
    </>
  );
};

export default Home;
