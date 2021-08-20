import React from "react";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const TherapistList = ({ therapists }) => {
  if (!therapists.length) {
    return <h3>No therapists were found</h3>;
  }
  console.log(therapists);
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
                <Button variant="primary">Book an appointment</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
};

export default TherapistList;
