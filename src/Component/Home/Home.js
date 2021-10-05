import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h2>Home Page</h2>
            <div className="d-flex ms-5">
            {/* Home page course  */}
            <div className="col-6">
            <Row xs={1} md={2} className="g-4 mt-3">
                {
                    courses.map(course => <Course
                    key={course.key}
                    course={course}
                    ></Course>)
                }
            </Row>
            </div>
            {/* Home cart */}
            <div className="col-6 mt-5 text-warning ms-5">
                <Cart></Cart>
            </div>
        </div>
        </div>
    );
};

export default Home;