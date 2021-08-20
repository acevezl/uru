import React from 'react';

import Auth from '../utils/auth';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THERAPIST } from '../utils/queries';

const SingleTherapist = (props) => {
    const { id: therapistId } = useParams();

    const { loading, data } = useQuery(QUERY_THERAPIST, { variables: { id: therapistId } });
    const therapist = data?.therapist || {}; 

    const loggedIn = Auth.loggedIn();

    if(loading) {
        return <h3>Loading data...</h3>
    }

    return (
        <>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={therapist.photo}  className="d-block mx-lg-auto img-fluid" alt={therapist.first_name + ' ' + therapist.last_name} width="400" height="300" loading="lazy" />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="display-5 fw-bold lh-1 mb-3">
                            {therapist.first_name} {therapist.last_name}
                        </h1>
                        <p className="lead">{therapist.bio}</p>

                        {loggedIn && (
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-warning btn-lg px-4 me-md-2 text-white">Reach Out</button>
                        </div>
                        )}
                        
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="p-5 rounded shadow" style={{background: '#aadaeb'}}>
                            <h2>Specialties</h2>
                            <ul>
                                {/* <li>Autism</li>
                                <li>Group Therapy</li>
                                <li>Autism</li>
                                <li>Group Therapy</li> */}

                                {therapist.specialties.map(specialty => (
                                <li>{specialty}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-5 rounded shadow" style={{background: '#f3e3bc'}}>
                            <h2>Skills</h2>
                            <ul>
                                {/* <li>Guitar</li>
                                <li>Exercice</li>
                                <li>Spanish</li>
                                <li>French</li> */}

                                {therapist.skills.map(skill => (
                                <li>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleTherapist;