import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Guest1 from '../assets/Guest1.jpg';
import Lesson2 from '../assets/Lesson2.jpg';
import Lesson3 from '../assets/Lesson3.jpg';
import Lesson4 from '../assets/slide.jpeg';
import Lesson5 from '../assets/slide2.jpeg';
import Lesson6 from '../assets/slide3.jpeg';
import Lesson7 from '../assets/slide5.jpeg';
import Lesson8 from '../assets/slide6.jpeg';
import Lesson9 from '../assets/slide7.jpeg';

function ImageGallery() {
    return (
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
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Lesson4}
                                alt="Lesson 4"
                            />
                            <Carousel.Caption>
                                <h5>Lesson 4</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Lesson5}
                                alt="Lesson 5"
                            />
                            <Carousel.Caption>
                                <h5>Lesson 5</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Lesson6}
                                alt="Lesson 6"
                            />
                            <Carousel.Caption>
                                <h5>Lesson 6</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Lesson7}
                                alt="Lesson 7"
                            />
                            <Carousel.Caption>
                                <h5>Lesson 7</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Lesson8}
                                alt="Lesson 8"
                            />
                            <Carousel.Caption>
                                <h5>Lesson 8</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Lesson9}
                                alt="Lesson 9"
                            />
                            <Carousel.Caption>
                                <h5>Lesson 9</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default ImageGallery;