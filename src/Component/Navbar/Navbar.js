import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse"        id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                {/* Home button  */}
                <Link className="nav-link active text-white text-uppercase ml-5" aria-current="page" to="/home">Home</Link>
              </li>
              {/* About button */}
              <li className="nav-item">
                <Link className="nav-link text-white ml-5" to="/about">About</Link>
              </li>
              {/* service button */}
              <li className="nav-item">
                <Link className="nav-link text-white ml-5" to="/services">Services</Link>
              </li>
              {/* OurCourse button */}
              <li className="nav-item">
                <Link className="nav-link text-white ml-5" to="/ourcourse">OurCourse</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;