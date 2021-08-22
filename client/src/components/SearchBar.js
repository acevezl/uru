import React, { useState } from "react";

import {
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_THERAPISTS_CRITERIA } from "../utils/queries";
import TherapistList from "../components/TherapistList";

import Auth from "../utils/auth";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const { loading, data } = useQuery(QUERY_THERAPISTS_CRITERIA, {
    variables: { criteria: searchText },
  });

  const therapists = data?.therapistcriteria || [];
  // update state based on form input changes
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchText(event.target.searchText.value);
    console.log(event.target.searchText.value);
  };

  return (
    <>
      <Row className="justify-content-center">
        <Row className="m-5 col-10 col-sm-8">
          <Col>
            <h1 style={{ color: "#116c95" }}>
              Let us help you find a Therapist for your child.
            </h1>
          </Col>
        </Row>
        <Row className="col-sm-8">
          <Form onSubmit={handleSubmit} className="col-12">
            <InputGroup
              type="search"
              className="mb-3"
            >
              <FormControl
                name="searchText"
                placeholder="Seach for a specialty..."
                className="p-2"
              />
            </InputGroup>
            <Button type="submit">
                Search
            </Button>
          </Form>
        </Row>
      </Row>
      {/* therapist cards, need to be conditionally rendered */}
      <Row>
        {loading ? (
          <div>Loading therapists...</div>
        ) : (
          <TherapistList therapists={therapists} />
        )}
      </Row>
    </>
  );
};

export default SearchBar;
