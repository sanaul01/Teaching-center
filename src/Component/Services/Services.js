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
        <div>
            <h2>Our services for you</h2>
            <Row xs={1} md={2} className="g-4">
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;