import React from "react";

import Auth from "../utils/auth";

import { Col, Row, Card } from "react-bootstrap";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_FILE, QUERY_THERAPIST } from "../utils/queries"; 

import { age } from "../utils/helpers"

import  { Redirect } from 'react-router-dom';

import AppointmentForm from '../components/AppointmentForm';

const SingleFile = (props) => {

    const { id: fileId } = useParams();

    const { loadingFile, data: fileData } = useQuery(QUERY_FILE, {
        variables: { id: fileId },
    })

    const file = fileData?.file || {};
    
    const { loadingTherapist, data: therapistData } = useQuery(QUERY_THERAPIST, {
        variables: { id: file.therapist_id },
    });

    const therapist = therapistData?.therapist || {};

    const loggedIn = Auth.loggedIn();
    if (!loggedIn) {
        return <Redirect to="/" />
    }

    if (loadingFile) {
        return <p>Loading file...</p>
    }

    if (loadingTherapist) {
        return <p>Loading therapist...</p>
    }

    return (
        <>
            <div className="container">
            <div className="row justify-content-center mt-5">
                    <div className="col text-left col-6">
                        <h1>
                        Patient: {file.patient_name}
                        </h1>
                        <span><strong>Age:</strong> {age(file.dob)} years</span><br/>
                        <span><strong>Allergies:</strong> {file.allergies}</span><br/>
                        <span><strong>File notes:</strong> {file.notes}</span>
                    </div>
                    <div className="col">
                        <h2>
                            Your therapist: {therapist.first_name} {therapist.last_name}
                        </h2>
                        <div className="justify-content-center">
                            <img
                            src={therapist.photo}
                            className="site-footer3--with-clipmask mb-3"
                            alt={therapist.first_name + " " + therapist.last_name}
                            loading="lazy"
                            width="100"
                            />
                        </div>
                        <span>E-mail: {therapist.email}</span><br/>
                        <span>Phone: {therapist.phone}</span><br/>
                    </div>
                </div>  
                 
                {file.appointments? ( 
                <div className="row justify-content-center mt-5">
                    <Row className="col-12 justify-content-center">
                        <h2>Your appointments</h2>
                    </Row>
                    <Row className="col-12 justify-content-center">
                    { file.appointments.map( (appointment, key) => (
                        <Col className="col-xl-3" key={appointment._id+'appt'}>
                            <Card
                                className="mb-3"
                            >
                                <Card.Body className="search-results-card">
                                    <Card.Title>
                                        <h2>
                                        Date: {appointment.date}
                                        </h2>
                                    </Card.Title>
                                    <Card.Text>
                                        <span>Time: {appointment.time} </span><br/>
                                        <span>Notes: {appointment.notes}</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    </Row>
                </div>
                ):(
                <div className="row justify-content-center mt-5">
                    <h3>You don't have any upcoming appointments</h3>
                </div>
                )} 

                <div className="row justify-content-center mt-5">
                    <AppointmentForm file={file} therapist={therapist}></AppointmentForm>
                </div>   
            </div>
        </>
    )

}

export default SingleFile;