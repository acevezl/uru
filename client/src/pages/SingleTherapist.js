import React from "react";

import Auth from "../utils/auth";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_THERAPIST } from "../utils/queries";
import ReachOutForm from "../components/ReachOutForm";

const SingleTherapist = (props) => {
  const { id: therapistId } = useParams();

  const { loading, data } = useQuery(QUERY_THERAPIST, {
    variables: { id: therapistId },
  });

  const therapist = data?.therapist || {};

  const loggedIn = Auth.loggedIn();

  const [ formVisibility, setFormVisibility ] = useState(false);

  if (loading) {
    return <h3>Loading data...</h3>;
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-sm-5 col-xl-4 align-middle">
            <img
              src={therapist.photo}
              className="site-footer3--with-clipmask m-5"
              alt={therapist.first_name + " " + therapist.last_name}
              loading="lazy"
            />
            <h1>
              {therapist.first_name} {therapist.last_name}
            </h1>
            <p>{therapist.bio}</p>
          </div>
          <div className="col col-sm-5 col-xl-4">
            <div
              className="p-5 mt-3 rounded shadow"
              style={{ background: "#b4ad9b" }}
            >
              <h2>Specialties</h2>
              <ul>
                {therapist.specialties.map((specialty) => (
                  <li>{specialty}</li>
                ))}
              </ul>
            </div>
            <div
              className="p-5 mt-3 rounded shadow"
              style={{ background: "#c5c1cb" }}
            >
              <h2>Skills</h2>
              <ul>
                {therapist.skills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mt-5">
              
              {loggedIn ? (
                <>
                  { !formVisibility && (
                  <button
                    type="button"
                    className="btn btn-warning btn-lg px-4 me-md-2 text-white"
                    onClick={() => setFormVisibility(true)}
                  >
                    Establish Care
                  </button>
                  )}
                  { formVisibility && (
                    <ReachOutForm/>
                  )}
                </>
              ) : (
                <>
                  Login to establish care with {therapist.first_name} {therapist.last_name}.
                </>
              )}
            </div>
        </div>
      </div>
    </>
  );
};

export default SingleTherapist;
