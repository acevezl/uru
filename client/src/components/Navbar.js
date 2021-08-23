import React, { useState } from "react";

import { Modal, Tab } from "react-bootstrap";

import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      <nav className="navbar navbar-custom border-bottom sticky-top">
        <a className="navbar-brand" href="/">
          <img className="photo" src="/images/uru2we.png" alt="URU logo"/>
        </a>

        <div className="form-inline">
          {Auth.loggedIn() ? (
            <>
              <a
                className="btn btn-outline-secondary my-2 my-sm-0 mx-2"
                href="/dashboard"
              >
                Dashboard
              </a>
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
        size="sml"
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        aria-labelledby="login-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body className="tabcon0">
            <img className="logologin" src="images/urukids.png" alt="Five kids in a row playing with toys, baloons and a bicycle"/>
            {/* <img className="logologin" src="images/g1.jpeg" /> */}
            <Tab.Content>
              <LoginForm handleModalClose={() => setShowLoginModal(false)} />
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>

      {/* signup modal */}
      <Modal
        size="sml"
        show={showSignupModal}
        onHide={() => setShowSignupModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container>
          <Modal.Header closeButton>
            <Modal.Title
              style={{ justifyContent: "center", }}
            >
              Sign Up
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="tabcon">
            <img className="logosignup" src="images/urus.png" alt="URU logo"/>
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
