import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const WhiteBox: React.FC = () => {
  return (
    <div className="white-box d-flex flex-column justify-content-center align-items-center">
      <h4>200+</h4>
      <span className="fw-bold">Acres</span>
      <span>Steel plant</span>
    </div>
  );
};

const FutureSection: React.FC = () => {
  return (
    <Container fluid className="future py-5">
      <Container>
        <Row>
          <Col>
            <div className="d-flex flex-column justify-content-center align-items-end h-100">
              <Image src="/leaf.svg" />{" "}
              <p className="text-light fw-bold text-end mt-2">
                We are commited towards the future
              </p>
            </div>
          </Col>
          <Col>
            <WhiteBox />
          </Col>
          <Col>
            <WhiteBox />
          </Col>
          <Col>
            <WhiteBox />
          </Col>
          <Col>
            <WhiteBox />
          </Col>
          <Col>
            <WhiteBox />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default FutureSection;
