import { Container, Row, Col } from "react-bootstrap";
import MiniAiHeadWhite from "../assets/miniaiheadwhite.png"
import Testimonials from '../Components/Testimonials';
function LearnMore(){
    const handleClick = ()=>{
        console.log("clicked")
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdaus9hKPUaws1zPxHIfev2tSm5vdjoJtkZA1hnvJPoqJB_9g/viewform?usp=embed_facebook"
    }
    return ( <> <section className="banner" id="learnmore">
        <div className="more-info">
        <Container>
            <Row className="align-items-center justify-content-center info-card">
                <Col xs={12} md={6}>
                    <div className="info-text">
                    <h3><span className="info-head">Sign Up Today</span></h3>
                    <p className="info-p">
                    Sign up for Mini AI to gain a hands-on introduction to artificial intelligence, sparking creativity and building essential future skills.
                    </p>
                    <button className="learnmore" id="formLink" onClick={handleClick}>Sign Up</button>
                    </div>
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-center miniSvg">
                    <img src={MiniAiHeadWhite}/>
                </Col>
            </Row>
            <Row className="mt-5">
            <Col xs={12} className="xxx" >
      
      <div className="carousel-intro">
        <h2>MiniAi' X Journey with Daisy</h2>
        <p>
          MiniAi recently teamed up with Journey with Daisy, a local senior care group,
          to help seniors embrace technology and improve their daily lives.
          Below are some images from this wonderful collaboration!
        </p>
      </div>

      {/* Testimonials carousel */}
      <Testimonials />
    </Col>
            </Row>
        </Container>
        </div>
    </section>
    </>)
}

export default LearnMore;