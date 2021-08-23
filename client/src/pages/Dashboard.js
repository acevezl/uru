
import React, { useState, useParams } from "react";
import {
  Row,
  Container,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import  { Redirect } from 'react-router-dom';

import Auth from "../utils/auth";
import SearchBar from "../components/SearchBar";
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
