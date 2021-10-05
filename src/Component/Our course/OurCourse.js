import React from 'react';
import { Card } from 'react-bootstrap';

const OurCourse = () => {

    return (
        <div>
            <div className="bg-primary ms-4 m-4">
                <Card className="bg-dark text-white">
                <Card.Img src="https://media.istockphoto.com/photos/teacher-desk-full-of-books-against-a-blackboard-background-whit-copy-picture-id1251272960?k=20&m=1251272960&s=170667a&w=0&h=Tn5qAzjy6HD4d6pUTBjFejcvKEn9BEOjQHI1C1j1Lok=" alt="Card image" />
                <Card.ImgOverlay className=" d-flex text-warning g-4">
                    <div className="mx-3">
                        <Card.Title>Easy Process to Learn English</Card.Title>
                        <Card.Text>
                        We have five thousend studnets still now
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
                    <div className="mx-3">
                        <Card.Title>Easy Process to Learn English</Card.Title>
                        <Card.Text>
                        We have five thousend studnets still now
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
};

export default OurCourse;