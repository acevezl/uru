import React from "react";

import Auth from "../utils/auth";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_FILE, QUERY_THERAPIST } from "../utils/queries"; 

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

    if (loadingFile) {
        return <p>Loading file...</p>
    }

    if (loadingTherapist) {
        return <p>Loading therapist...</p>
    }

    console.log(therapist);

    return (
        <>
        <div className="m-5 row justify-content-center">
            <h1>My health file for {file.patient_name}</h1> 
        </div>
        <div className="m-5 row justify-content-center">
            <p>DOB: {file.patient_name}</p>
        </div>
        <div className="m-5 row justify-content-center">
            <p>Therapist: {therapist.first_name} {therapist.last_name}</p>
        </div>
        <div className="m-5 row justify-content-center">
            <h3>Upcoming appointments...</h3>
            <ul>
                {therapist.appointments?.map(apt => (
                    <li>{apt}</li>
                ))}
                </ul>
        </div>
        </>
    )

}

export default SingleFile;