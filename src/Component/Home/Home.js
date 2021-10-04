import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
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
            <Row xs={1} md={2} className="g-4 mt-5">
                {
                    courses.map(course => <Course
                    key={course.key}
                    course={course}
                    ></Course>)
                }
            </Row>
        </div>
    );
};

export default Home;