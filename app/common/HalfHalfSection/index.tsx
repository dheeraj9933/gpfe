import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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
          {leftContent}
        </Col>
        <Col xs={12} md={6} className="d-flex ">
          {rightContent}
        </Col>
      </Row>
    </Container>
  );
};

export default HalfHalfSection;
