import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

//import { createUser } from '../utils/API';
import Auth from "../utils/auth";

import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  // set state for alert
  const [showAlert, setShowAlert] = useState(error ? true : false);

  // const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form
        className="p-5"
        noValidate
        validated={validated}
        onSubmit={handleFormSubmit}
      >
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group className="input-group">
          <div className="input-group-prepend">
            <Form.Label className="input-group-text" htmlFor="username">
              Username
            </Form.Label>
          </div>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-group">
          <div className="input-group-prepend"><Form.Label className="input-group-text" htmlFor="first_name">
            First Name
          </Form.Label></div>

          <Form.Control
            type="text"
            placeholder="Your first name"
            name="first_name"
            onChange={handleInputChange}
            value={userFormData.first_name}
            required
          />
          <Form.Control.Feedback type="invalid">
            First name is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-group">
          <div className="input-group-prepend"><Form.Label className="input-group-text" htmlFor="last_name">
            Last Name
          </Form.Label></div>
          <Form.Control
            type="text"
            placeholder="Your last name"
            name="last_name"
            onChange={handleInputChange}
            value={userFormData.last_name}
            required
          />
          <Form.Control.Feedback type="invalid">
            Last name is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-group">
          <div className="input-group-prepend"><Form.Label className="input-group-text" htmlFor="phone">
            Phone Number
          </Form.Label></div>
          <Form.Control
            type="text"
            placeholder="Your phone number"
            name="phone"
            onChange={handleInputChange}
            value={userFormData.phone}
            required
          />
          <Form.Control.Feedback type="invalid">
            Your phone number is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-group">
          <div className="input-group-prepend"><Form.Label className="input-group-text" htmlFor="email">
            Email
          </Form.Label></div>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input-group">
          <div className="input-group-prepend"><Form.Label className="input-group-text" htmlFor="password">
            Password
          </Form.Label></div>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="primary"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
