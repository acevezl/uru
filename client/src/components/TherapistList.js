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
          <Col>
            <Card
              className="p-5 mb-3"
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
                  <h3>Specialties:</h3>
                  <ul>
                    {therapist.specialties.map((specialty) => (
                      <li>{specialty}</li>
                    ))}
                  </ul>
                  <h3>Skills:</h3>

                  <ul>
                    {therapist.skills.map((skill) => (
                      <li>{skill}</li>
                    ))}
                  </ul>
                </Card.Text>
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
