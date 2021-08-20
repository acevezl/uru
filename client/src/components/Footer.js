import React from 'react';
import { Github } from 'react-bootstrap-icons'

function Footer() {
    return (
        <footer className="py-3 my-4 mx-4">
        <ul className="nav justify-content-center border-bottom p-3 mb-3">
          <li className="nav-item" style={{ color: '#69b4d4'}}>"Today, You are You, that is Truer than True, There is no one alive, that is Youer than You" ~ Dr. Seuss</li>
        </ul>
        <p className="text-center"><a href="https://github.com/acevezl/uru" target="_blank" rel="noopener noreferrer" style={{ color: '#69b4d4'}}><Github></Github></a></p>
        

      </footer>
    )
};

export default Footer;