import React from "react";
import {
  Container
} from "react-bootstrap";

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
