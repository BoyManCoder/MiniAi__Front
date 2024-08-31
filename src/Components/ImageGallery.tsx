import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Guest1 from '../assets/Guest1.jpg';
import Lesson2 from '../assets/Lesson2.jpg';
import Lesson3 from '../assets/Lesson3.jpg';

function ImageGallery() {
    return (
        <>
            <Container className="gallery-container gradient-bg" id="sample">
                <Row>
                    <div className="text-center mb-5 mt-1 gallery-head">
                        <h1>See samples from our lessons!</h1>
                        <h3 className="mb-5">
                            Below are snippets from our lessons, we have various guest speakers, engaging presentations and fun games!
                        </h3>
                    </div>
                </Row>
                <Row>
                    <Col xs={12} className="d-flex justify-content-center align-items-center">
                        <Carousel className="w-100">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Guest1}
                                    alt="Guest Speaker"
                                />
                                <Carousel.Caption>
                                    <h5>Guest Speaker</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Lesson2}
                                    alt="Lesson 2"
                                />
                                <Carousel.Caption>
                                    <h5>Lesson 2</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Lesson3}
                                    alt="Lesson 3"
                                />
                                <Carousel.Caption>
                                    <h5>Lesson 3</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ImageGallery;
