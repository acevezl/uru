import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Auth from '../utils/auth';

const Home = () => {

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
          <Col>
            <Card style={{ width: '18rem' }} className='mx-auto mb-2'>
              <Card.Img variant="top" src="https://st.depositphotos.com/1011643/2504/i/950/depositphotos_25041805-stock-photo-psychologist-with-patient.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }} className='mx-auto mb-2'>
              <Card.Img variant="top" src="https://st.depositphotos.com/1011643/2504/i/950/depositphotos_25041805-stock-photo-psychologist-with-patient.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }} className='mx-auto mb-2'>
              <Card.Img variant="top" src="https://st.depositphotos.com/1011643/2504/i/950/depositphotos_25041805-stock-photo-psychologist-with-patient.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }} className='mx-auto mb-2'>
              <Card.Img variant="top" src="https://st.depositphotos.com/1011643/2504/i/950/depositphotos_25041805-stock-photo-psychologist-with-patient.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }} className='mx-auto mb-2'>
              <Card.Img variant="top" src="https://st.depositphotos.com/1011643/2504/i/950/depositphotos_25041805-stock-photo-psychologist-with-patient.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }} className='mx-auto mb-2'>
              <Card.Img variant="top" src="https://st.depositphotos.com/1011643/2504/i/950/depositphotos_25041805-stock-photo-psychologist-with-patient.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>

          {/* <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6 mb-4" >
                <img src="https://st.depositphotos.com/1011643/2504/i/950/depositphotos_25041805-stock-photo-psychologist-with-patient.jpg" className="d-block mx-lg-auto img-fluid" alt="Therapist Stock" width="400" height="500" loading="lazy"></img>
              </div>
              <div className="col-lg-6 mb-4" style={{color: '#69b4d4'}}>
                <h1 className="display-5 fw-bold lh-1 mb-3">Therapist Name</h1>
                <p className="lead">Description of specialties and skills</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" className="btn btn-warning btn-lg px-4 me-md-2 text-white">Learn More</button>
                </div>
              </div>

              <div className="col-10 col-sm-8 col-lg-6 mb-4">
                <img src="https://media.istockphoto.com/photos/making-profile-picture-id1015399630?k=6&m=1015399630&s=612x612&w=0&h=ggOs93wCsLgFb_RGW9HABpMRhFe1BbxIrZ0JoPecnmE=" className="d-block mx-lg-auto img-fluid" alt="Therapist Stock" width="400" height="500" loading="lazy"></img>
              </div>
              <div className="col-lg-6 mb-4" style={{color: '#69b4d4'}}>
                <h1 className="display-5 fw-bold lh-1 mb-3">Therapist Name</h1>
                <p className="lead">Description of specialties and skills</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" className="btn btn-warning btn-lg px-4 me-md-2 text-white">Learn More</button>
                </div>
              </div>

              <div className="col-10 col-sm-8 col-lg-6 mb-4">
                <img src="https://st.depositphotos.com/1011643/2504/i/950/depositphotos_25041805-stock-photo-psychologist-with-patient.jpg" className="d-block mx-lg-auto img-fluid" alt="Therapist Stock" width="400" height="500" loading="lazy"></img>
              </div>
              <div className="col-lg-6 mb-4" style={{color: '#69b4d4'}}>
                <h1 className="display-5 fw-bold lh-1 mb-3">Therapist Name</h1>
                <p className="lead">Description of specialties and skills</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" className="btn btn-warning btn-lg px-4 me-md-2 text-white">Learn More</button>
                </div>
              </div>

              <div className="col-10 col-sm-8 col-lg-6 mb-4">
                <img src="https://media.istockphoto.com/photos/making-profile-picture-id1015399630?k=6&m=1015399630&s=612x612&w=0&h=ggOs93wCsLgFb_RGW9HABpMRhFe1BbxIrZ0JoPecnmE=" className="d-block mx-lg-auto img-fluid" alt="Therapist Stock" width="400" height="500" loading="lazy"></img>
              </div>
              <div className="col-lg-6 mb-4" style={{color: '#69b4d4'}}>
                <h1 className="display-5 fw-bold lh-1 mb-3">Therapist Name</h1>
                <p className="lead">Description of specialties and skills</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" className="btn btn-warning btn-lg px-4 me-md-2 text-white">Learn More</button>
                </div>
              </div>
          </Row> */}
      </Container>
    </>
  );
};

export default Home;
