import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';

import { FilePersonFill } from 'react-bootstrap-icons';

import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      <nav className="navbar border-bottom mx-3 sticky-top bg-white">
        <a className="navbar-brand" href='/'>
          <FilePersonFill className='mb-1' style={{ color: '#69b4d4' }}></FilePersonFill>
          <span style={{ color: '#69b4d4' }}>URU</span>
        </a>

        <div className="form-inline">
          {Auth.loggedIn() ? (
            <>
              <a className="btn btn-outline-secondary my-2 my-sm-0 mx-2" type="submit" onClick={Auth.logout}>Logout</a>
              <a className="btn btn-warning my-2 my-sm-0 text-white" type="submit">Search</a>
            </>
          ) : (
              <>
                <a className="btn btn-outline-secondary my-2 my-sm-0 mx-2" type="submit" onClick={() => setShowLoginModal(true)}>Login</a>
                <a className="btn btn-warning my-2 my-sm-0 text-white" type="submit" onClick={() => setShowSignupModal(true)}>Sign Up</a>
              </>
            )}
        </div>
      </nav>


      {/* login modal */}
      <Modal
        size='lg'
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        aria-labelledby='login-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container>
          <Modal.Header closeButton>
            <Modal.Title>
              Login
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <LoginForm handleModalClose={() => setShowLoginModal(false)} />
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>


      {/* signup modal */}
      <Modal
        size='lg'
        show={showSignupModal}
        onHide={() => setShowSignupModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container>
          <Modal.Header closeButton>
            <Modal.Title>
              Sign Up
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
