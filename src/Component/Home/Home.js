
import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
            <br/>
            <Button variant="danger">click me</Button>
        </div>
    );
};

export default Home;