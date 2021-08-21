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
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <>
      <Container>
        <SearchBar></SearchBar>
      </Container>
    </>
  );
};

export default Home;
