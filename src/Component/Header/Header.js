
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
        </div>
    );
};

export default Header;