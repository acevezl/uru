import React from 'react';

import { Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
    return(
        <>
            <Row className='text-center my-4'>
                <Col><h1 style={{color: '#69b4d4'}}>Let us help you find a Therapist for your child!</h1></Col>
            </Row>
            <Row>
                <Form onSubmit={handleFormSubmit}>
                    <InputGroup className="mb-3 mx-auto" style={{ width: '75%' }} type='search'>
                    <FormControl
                    placeholder="Seach for a specialty..." className='mx-2'
                    />
                    <Button variant="outline-warning">Search</Button>{' '}
                    </InputGroup>
                </Form>
            </Row>
        </>
    )
}

export default SearchBar; 