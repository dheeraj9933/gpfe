import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const AboutUs: React.FC = () => {
  return (
    <Container className="about-us-section-container">
      <Row className="">
        <Col style={{ flexBasis: "50%", flexGrow: "0" }}>
          <div className="d-flex justify-content-center flex-column gap-2">
            <h2 className="orange-text helvetica-neue-reg text-uppercase h4">About Us</h2>
            <h2 className="fs-3 cambria-bold">A Legacy of Strength. A Future of Possibility.</h2>
            <p>
              GP Agarwal Group is a next-generation industrial powerhouse, built
              on decades of trust and excellence. With diversified ventures in
              steel, sustainability, and infrastructure, we are committed to
              driving nation-building through innovation, integrity, and impact.
            </p>
            <div>
              <Button className="px-4" variant="danger">
                Know More
              </Button>
            </div>
          </div>
        </Col>
        <Col
          className="d-flex justify-content-end"
          style={{
            flexBasis: "50%",
            flexGrow: "0",
            position: "relative",
          }}
        >
          <Image src="/about1.png" className="about-img-1" />
          <Image src="/about2.png" className="about-img-2" />
          <div></div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
