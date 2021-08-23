import React from "react";
import { QUERY_ME } from '../utils/queries';
import { useQuery } from "@apollo/react-hooks";

import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { age } from "../utils/helpers"

const MyFiles = (props) => {

    const { loading, data } = useQuery(QUERY_ME);
    const user = data?.me || {};

    if (loading) {
        return (<span>Loading...</span>)
    }

    return (
        <>
        <div className="m-5 row justify-content-center">
            <h1>My health files</h1> 
        </div>
        <Row className="m-3 justify-content-center"> 
        { user.files.map( file => (
            <Col className="col-xl-3">
                <Card
                    className="mb-3"
                    key={file._id}
                >
                    <Card.Body className="search-results-card">
                        <Card.Title>
                            <h2>
                            Patient: {file.patient_name}
                            </h2>
                        </Card.Title>
                        <Card.Text>
                            <span>Age: {age(file.dob)} years</span><br/>
                            <span>Allergies: {file.allergies}</span><br/>
                            <span>Notes: {file.notes}</span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        
                        <Link
                        className="btn btn-primary"
                        to={`/file/${file._id}`}
                        >
                        Open this file
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
        </>
    )

}

export default MyFiles;