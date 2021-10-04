import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const {name, img, price} = props.course || {}
    return (
        <Col>
      <Card className="h-100">
        <Card.Img className="h-75" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            $ {price} for this course
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Course;