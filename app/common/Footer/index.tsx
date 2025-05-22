import React from 'react';
import { Col, Container, Image, Nav, Row } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
       <footer className="py-5 bg-light">
        <Container>
          <Row>
            <Col md={3}>
              <Image
                src="https://picsum.photos/50/50"
                alt="GP Agarwal Logo"
                className="mb-3"
              />
            </Col>
            <Col md={3}>
              <h5>Who We Are</h5>
              <Nav className="flex-column">
                <Nav.Link href="#about-us">About Us</Nav.Link>
                <Nav.Link href="#founders-journey">Founder's Journey</Nav.Link>
              </Nav>
            </Col>
            <Col md={3}>
              <h5>Our Businesses</h5>
              <Nav className="flex-column">
                <Nav.Link href="#steel">Steel</Nav.Link>
                <Nav.Link href="#casting">Casting</Nav.Link>
                <Nav.Link href="#power">Power</Nav.Link>
              </Nav>
            </Col>
            <Col md={3}>
              <h5>Contact Us</h5>
              <p>
                Rama Towers, 5-4-83, 2nd Floor, TSK Chambers, M.G. Road,
                Secunderabad-500003
              </p>
              <p>Tel: +91 9002345678</p>
              <p>Fax: +91 22 6359000</p>
            </Col>
          </Row>
          <hr />
          <p className="text-center">
            Copyright © 2025 GP Agarwal Group. All Rights Reserved.
          </p>
        </Container>
      </footer>
    );
};

export default Footer;