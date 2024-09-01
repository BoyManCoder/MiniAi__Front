import { Row, Col, Container} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Abdul from "../assets/Abdul.jpg"
import Mathew from "../assets/Mathew.jpg"
import Raj from "../assets/Raj.jpg"
import Chloe from "../assets/Chloe.jpeg"

function Testimonials(){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return(<>
     <section className="slider" id="sliders">
      <Container>
        <Row>
          <Col>
          <div className="slider-bx">
            <h2>Testimonials</h2>
            <p>Here is what our students think about the program!</p>
            <Carousel responsive={responsive} infinite={true} className="slider-slider">
              <div className="item">
                <img src={Mathew}/>
                <h3>Mathew Clarence</h3>
                <h5>"Amazing!"</h5>
              </div>
              <div className="item">
                <img src={Raj}/>
                <h3>Raj Deep</h3>
                <h5>"Really Appreciate the guests!"</h5>
              </div>
              <div className="item">
                <img src={Abdul}/>
                <h3>Adbul Ibrahim</h3>
                <h5>"AI is the future I want to be a part of."</h5>
              </div>
              <div className="item chl">
                <img src={Chloe}/>
                <h3>Chloe Beckman</h3> 
                <h5>"Thank you for the certificate!"</h5>
              </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
)}

export default Testimonials;