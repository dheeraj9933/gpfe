import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Reveal from "../Reveal";

interface HalfHalfSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const HalfHalfSection: React.FC<HalfHalfSectionProps> = ({
  leftContent,
  rightContent,
}) => {
  return (
    <Container>
      <Row className="align-items-center justify-content-around">
        <Col xs={12} md={6} className="d-flex ">
          <Reveal config={{ fromLeft: true, delay: 0.2 }} className="me-2">
            {leftContent}
          </Reveal>
        </Col>
        <Col xs={12} md={6} className="d-flex ">
          <Reveal config={{ fromRight: true, delay: 0.2 }}>
            {rightContent}
          </Reveal>
        </Col>
      </Row>
    </Container>
  );
};

export default HalfHalfSection;
