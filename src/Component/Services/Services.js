import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import OurCourse from '../Our course/OurCourse';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-5">
            <h2 className="text-warning">Our Services For You</h2>
            <div className="container">
            <Row xs={1} md={2} className="g-4">
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Services;