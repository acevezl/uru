import React, { useState } from "react";

import { Modal, Tab } from "react-bootstrap";

import { FilePersonFill } from "react-bootstrap-icons";

import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      <nav className="navbar navbar-custom border-bottom mx-3 sticky-top">
        <a className="navbar-brand" href="/">
          {/* <FilePersonFill
            className="mb-1"
            style={{ color: "#785809" }}
          ></FilePersonFill> */}

          {/* <span style={{ color: "#1b131b" }}> */}
          <img className="photo" src="images/uru2we.png" />
          {/* </span> */}
        </a>

        <div className="form-inline">
          {Auth.loggedIn() ? (
            <>
              <button
                className="btn btn-outline-secondary my-2 my-sm-0 mx-2"
                type="submit"
                onClick={Auth.logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-secondary my-2 my-sm-0 mx-2"
                type="submit"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </button>
              <button
                className="btn btn-secondary my-2 my-sm-0 text-white"
                type="submit"
                onClick={() => setShowSignupModal(true)}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>

      {/* login modal */}
      <Modal
        size="lg"
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        aria-labelledby="login-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="logologin" src="images/b2.jpeg" />
            <Tab.Content>
              <LoginForm handleModalClose={() => setShowLoginModal(false)} />
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>

      {/* signup modal */}
      <Modal
        size="lg"
        show={showSignupModal}
        onHide={() => setShowSignupModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="logosignup" src="images/urus.png" />
            <Tab.Content>
              <SignUpForm handleModalClose={() => setShowSignupModal(false)} />
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
