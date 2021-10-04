import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {name, img, started, duration, description} = props.service || {}
    return (
        <Col>
      <Card className="h-100">
        <Card.Img className="h-75" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Duration: {duration}
          </Card.Text>
          <Card.Text>
            Start: {started}
          </Card.Text>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;