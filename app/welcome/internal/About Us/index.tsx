import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import Reveal from "~/common/Reveal";

const AboutUs: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container className="about-us-section-container">
      <Row className="">
        <Col className="flex-50">
          <Reveal config={{ fromLeft: true }}>
            <div className="d-flex justify-content-center flex-column gap-2">
              <h2 className="orange-text helvetica-neue-reg text-uppercase h4">
                About Us
              </h2>
              <h2 className="fs-3 cambria-bold">
                A Legacy of Strength. A Future of Possibility.
              </h2>
              <p>
                GP Agarwal Group is a next-generation industrial powerhouse,
                built on decades of trust and excellence. With diversified
                ventures in steel, sustainability, and infrastructure, we are
                committed to driving nation-building through innovation,
                integrity, and impact.
              </p>
              <div>
                <Button
                  className="px-4 mt-3"
                  variant="danger"
                  onClick={() => navigate("/about-us")}
                >
                  Know More
                </Button>
              </div>
            </div>
          </Reveal>
        </Col>
        <Col className="d-flex justify-content-end flex-50 position-relative w-50 mt-2 mt-lg-0">
          <Image src="/HomePage/about1.webp" className="about-img-1" />

          <Image src="/HomePage/about2.webp" className="about-img-2" />

          <div></div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
