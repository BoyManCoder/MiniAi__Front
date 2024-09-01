import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExecCard from './ExecCard';
import ExecCardSmall from './ExecCardSmall';
import Srigan from "../assets/srigan.jpg"
import Hani from "../assets/hani.jpg"

function ExecPage() {
  return (
    <body className="execBody">
          <Container className="d-flex flex-column justify-content-center align-items-center pd">
      <Row className="d-none d-md-block justify-content-center">
        {/* Big Card 1 */}
        <Col md={8} lg={6}>
          <ExecCard
          linkedin='https://www.linkedin.com/in/srigan-sivagnanenthirarajah-418601206/'
            imgURL={Srigan}
            name="Srigan Siva"
            subname="CEO and Outreach Lead"
            desc="Srigan is a motivated high school student from Northview Heights Secondary. He spends his days learning about the ever-growing industry of artificial intelligence. Through emails and messages, Srigan has generated hundreds of connections to start this project. In his spare time, he loves to learn about quantum mechanics. Srigan is a passionate educator."
          />
        </Col>
      </Row>
      <Row className="d-none d-md-block justify-content-center">
        {/* Big Card 2 */}
        <Col md={8} lg={6}>
          <ExecCard
          linkedin='https://www.linkedin.com/in/vedant-kansara-381330221/'
            imgURL="[img]"
            name="Vedant Kansara"
            subname="COO and Curriculum Developer"
            desc="Vedant is a motivated high school student from Northview Heights Secondary. He constantly spends time learning about the latest applications of artificial intelligence. In his spare time, he tutors children in math and helps refine their learning. Vedant is a passionate educator."
          />
        </Col>
      </Row>
      <Row className="d-none d-md-block justify-content-center">
        {/* Big Card 3 */}
        <Col md={8} lg={6}>
          <ExecCard
            linkedin='https://www.linkedin.com/in/hanimahdi/'
            imgURL={Hani}
            name="Hani Mahdi"
            subname="Lead Web Developer"
            desc="I am a talented teenage front-end web developer currently studying at Northview Heights Secondary School. As the lead developer at Mini AI, I recently spearheaded the design and development of our innovative website using React.js, Bootstrap, and other modern libraries. My role involved leveraging my expertise to deliver a dynamic and engaging online presence for our company."
          />
        </Col>
      </Row>

      <Row className="d-block d-md-none justify-content-center sml">
        {/* Small Card 1 */}
        <Col xs={10} sm={8} md={6}>
          <ExecCardSmall
            imgURL={Srigan}
            name="Srigan Siva"
            subname="CEO and Outreach Lead"
            desc="Srigan is a motivated high school student from Northview Heights Secondary. He spends his days learning about the ever-growing industry of artificial intelligence. Through emails and messages, Srigan has generated hundreds of connections to start this project."
          />
        </Col>
      </Row>
      <Row className="d-block d-md-none justify-content-center sml">
        {/* Small Card 2 */}
        <Col xs={10} sm={8} md={6}>
          <ExecCardSmall
            imgURL="[img]"
            name="Vedant Kansara"
            subname="COO and Curriculum Developer"
            desc="Vedant is a motivated high school student from Northview Heights Secondary. He constantly spends time learning about the latest applications of artificial intelligence. In his spare time, he tutors children in math and helps refine their learning. Vedant is a passionate educator."
          />
        </Col>
      </Row>
      <Row className="d-block d-md-none justify-content-center sml">
        {/* Small Card 3 */}
        <Col xs={10} sm={8} md={6}>
          <ExecCardSmall
            imgURL={Hani}
            name="Hani Mahdi"
            subname="Lead Web Developer"
            desc="I'm a talented teenage front-end web developer who served as the lead developer at Mini Ai, where I recently spearheaded the design of our cutting-edge website."
          />
        </Col>
      </Row>
    </Container>
    </body>
  );
}

export default ExecPage;
