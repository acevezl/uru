import React from "react";
import { Link } from "react-router-dom";

import { Col, Card } from "react-bootstrap";

const TherapistList = ({ therapists }) => {
  if (!therapists.length) {
    return <h3>No therapists were found</h3>;
  }

  return (
    <>
      {therapists &&
        therapists.map((therapist) => (
          <Col>
            <Card
              style={{ width: "18rem" }}
              className="mx-auto mb-2"
              key={therapist._id}
            >
              <Card.Img variant="top" src={therapist.photo} />
              <Card.Body>
                <Card.Title>
                  {therapist.first_name} {therapist.last_name}
                </Card.Title>
                <Card.Text>
                  Specialties:
                  <ul>
                    {therapist.specialties.map((specialty) => (
                      <li>{specialty}</li>
                    ))}
                  </ul>
                  Skills:
                  <ul>
                    {therapist.skills.map((skill) => (
                      <li>{skill}</li>
                    ))}
                  </ul>
                </Card.Text>
                <Link className='btn btn-primary' to={`/therapist/${therapist._id}`}>View Profile</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
};

export default TherapistList;
