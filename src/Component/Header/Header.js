
import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div className="bg-primary header"> 
                <h2 className="text-warning">English Teaching Center</h2>
                <br/>
                <Link className="text-white" to='home'>Home</Link>
                <Link className="text-white mx-3" to='about'>About</Link>
                <Link className="text-white" to='services'>Services</Link>
                <Link className="text-white mx-3" to='ourcourse'>OurCourse</Link> 
        </div>
    );
};

export default Header;