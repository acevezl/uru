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
          <Col className="col-xl-3">
            <Card
              className="mb-3"
              key={therapist._id}
            >
              <Card.Img
                variant="top"
                className="site-footer3--with-clipmask"
                src={therapist.photo}
              />
              <Card.Body className="search-results-card">
                <Card.Title>
                  <h2>
                    {therapist.first_name} {therapist.last_name}
                  </h2>
                </Card.Title>
                <br />
                <Card.Text>
                  <h3>Specialties:</h3>
                  <p>
                    {therapist.specialties.map((specialty) => (
                      <span>{specialty}, </span>
                    ))}
                  </p>
                  <h3>Skills:</h3>

                  <p>
                    {therapist.skills.map((skill) => (
                      <span>{skill}, </span>
                    ))}
                  </p>
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
