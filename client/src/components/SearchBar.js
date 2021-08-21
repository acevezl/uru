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
      <Row className="text-center my-4 col-12">
        <Col>
          <h1 style={{ color: "#116c95" }}>
            Let us help you find a Therapist for your child!
          </h1>
        </Col>
      </Row>
      <Row className="text-center my-4 col-12">
        <Form onSubmit={handleSubmit} className="col-12">
          <InputGroup
            className="mb-3 mx-auto"
            style={{ width: "75%" }}
            type="search"
          >
            <FormControl
              name="searchText"
              placeholder="Seach for a specialty..."
              className="mx-2"
            />
            <Button type="submit" variant="outline-warning">
              Search
            </Button>{" "}
          </InputGroup>
        </Form>
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
