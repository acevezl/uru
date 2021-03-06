import React from "react";

import Auth from "../utils/auth";
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

  if (loading) {
    return <h3>Loading data...</h3>;
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col col-sm-5 col-xl-4 align-middle">
            <img
              src={therapist.photo}
              className="site-footer3--with-clipmask mb-3"
              alt={therapist.first_name + " " + therapist.last_name}
              loading="lazy"
              width="200"
            />
            <h1>
              {therapist.first_name} {therapist.last_name}
            </h1>
            <p>{therapist.bio}</p>
          </div>
          <div className="col col-sm-5 col-xl-4">
            <div
              className="p-5 mt-3 rounded shadow"
              style={{ background: "#c8c6c1" }}
            >
              <h2>Specialties</h2>
              <ul>
                {therapist.specialties.map((specialty, key) => (
                  <li key={therapist._id+'specialty'+key}>{specialty}</li>
                ))}
              </ul>
            </div>
            <div
              className="p-5 mt-3 rounded shadow"
              style={{ background: "#d1ced8" }}
            >
              <h2>Skills</h2>
              <ul>
                {therapist.skills.map((skill, key) => (
                  <li key={therapist._id+'skill'+key}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mt-5">
              
              {loggedIn ? (
                <>
                  <ReachOutForm therapist={therapist}/>
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
