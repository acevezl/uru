
import React from "react";
import {
  Container
} from "react-bootstrap";
import  { Redirect } from 'react-router-dom';

import Auth from "../utils/auth";
// We may decide to add the Search Bar to the dashboard
// import SearchBar from "../components/SearchBar";
import MyFiles from "../components/MyFiles";

const Dashboard = () => {

    const loggedIn = Auth.loggedIn();
    console.log(loggedIn);
    return (
        <>
        { loggedIn ? (
            <Container>
                <MyFiles/>
            </Container>
        ):(
            <Redirect to="/" />
        )}  
        </>
    );
};

export default Dashboard;
