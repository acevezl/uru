import React from "react";
import { Link } from "react-router-dom";

import { Col, Row, Card } from "react-bootstrap";

const TherapistList = ({ therapists }) => {
  if (!therapists.length) {
    return <h3>No therapists were found</h3>;
  }

  return (
    <Row className="m-3">
      {therapists &&
        therapists.map((therapist) => (
          <Col className="col-xl-3" key={therapist._id+'card'}>
            <Card
              className="mb-3 therapist-card"
              key={therapist._id}
            >
              <Card.Img
                variant="top"
                className="site-footer3--with-clipmask"
                src={therapist.photo}
              />
              <Card.Body>
                <Card.Title>
                  <h2>
                    {therapist.first_name} {therapist.last_name}
                  </h2>
                </Card.Title>
                <br />
                <Card.Text>
                  <span className='h3'>Specialties: </span>
                  {therapist.specialties.map((specialty, key) => (
                    <span key={therapist._id+'specialty'+key}>{specialty}{key<therapist.specialties.length-1 ? ',' : ''} </span>
                  ))}
                  <br></br>
                  <span className='h3'>Skills: </span>
                  {therapist.skills.map((skill, key) => (
                    <span key={therapist._id+'skill'+key}>{skill}{key<therapist.skills.length-1 ? ',' : ''} </span>
                  ))}
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Link
                    className="btn btn-primary"
                    to={`/therapist/${therapist._id}`}
                  >
                    View Profile
                  </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default TherapistList;
