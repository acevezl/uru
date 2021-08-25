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

import Auth from "../utils/auth";

const Home = () => {
    return (
        <>
            <Container>
                <img className="welcomelogo" src="images/urus.png" />
            </Container>
        </>
    );
};

export default Home;