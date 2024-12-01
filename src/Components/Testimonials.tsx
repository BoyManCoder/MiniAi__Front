import React from 'react';
import { Carousel } from 'react-bootstrap';
import Car1 from "../assets/Car1.jpg";
import Car2 from "../assets/Car2.jpg";
import Car3 from "../assets/Car3.jpg";
import Car4 from "../assets/Car4.jpg";
import Car5 from "../assets/Car5.jpg";

function Testimonials() {
  return (
    <div className="testimonials-carousel-container">
      <Carousel prevIcon={null} nextIcon={null}>
        <Carousel.Item>
          <img className="testimonials-carousel-image" src={Car1} alt="Car 1" />
          <Carousel.Caption>
            <h3>Car 1</h3>
            <p>Great performance and style.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="testimonials-carousel-image" src={Car2} alt="Car 2" />
          <Carousel.Caption>
            <h3>Car 2</h3>
            <p>Luxury meets power.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="testimonials-carousel-image" src={Car3} alt="Car 3" />
          <Carousel.Caption>
            <h3>Car 3</h3>
            <p>Unmatched speed and elegance.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="testimonials-carousel-image" src={Car4} alt="Car 4" />
          <Carousel.Caption>
            <h3>Car 4</h3>
            <p>Experience the thrill of the road.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="testimonials-carousel-image" src={Car5} alt="Car 5" />
          <Carousel.Caption>
            <h3>Car 5</h3>
            <p>Elegance and comfort redefined.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonials;
