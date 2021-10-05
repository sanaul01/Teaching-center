import React from 'react';
import { Card } from 'react-bootstrap';

const OurCourse = () => {

    return (
        <div>
            <div className="bg-primary ms-4 m-4">
                <Card className="bg-dark text-white">
                <Card.Img src="https://media.istockphoto.com/photos/teacher-desk-full-of-books-against-a-blackboard-background-whit-copy-picture-id1251272960?k=20&m=1251272960&s=170667a&w=0&h=Tn5qAzjy6HD4d6pUTBjFejcvKEn9BEOjQHI1C1j1Lok=" alt="Card image" />
                <Card.ImgOverlay className=" d-flex text-warning g-4">
                    <div className="mx-1 col-3">
                        <Card.Title>English For Biginners</Card.Title>
                        <Card.Text>
                        It's Three months course
                        </Card.Text>
                        <Card.Text>Start 1st january 2022</Card.Text>
                    </div>
                    <div className="mx-1 col-3">
                        <Card.Title>English For Intermediate</Card.Title>
                        <Card.Text>
                        It's Three months course
                        </Card.Text>
                        <Card.Text>It will be started 15th january, 2022</Card.Text>
                    </div>
                    <div className="mx-1 col-3">
                        <Card.Title>English For Business</Card.Title>
                        <Card.Text>
                        It's Three months course
                        </Card.Text>
                        <Card.Text>It will be started 1st February, 2022</Card.Text>
                    </div>
                    <div className="mx-1 col-3">
                        <Card.Title>English For Kids</Card.Title>
                        <Card.Text>
                        It's six months course
                        </Card.Text>
                        <Card.Text>It will be started 15th February, 2022</Card.Text>
                    </div>
                </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
};

export default OurCourse;