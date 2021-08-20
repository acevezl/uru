import React from 'react';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchBar = () => {
    return(
        <>
            <Row className='text-center my-4'>
                <Col><h1 style={{color: '#69b4d4'}}>Let us help you find a Therapist for your child!</h1></Col>
            </Row>
            <Row>
                <InputGroup className="mb-3 mx-auto" style={{ width: '75%' }} type='search'>
                <FormControl
                placeholder="Seach for a specialty..." className='mx-2'
                />
                <Button variant="outline-warning">Search</Button>{' '}
                </InputGroup>
            </Row>
        </>
    )
}

export default SearchBar; 