import React from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="">
      <Container className="d-flex flex-column align-items-center">
        <Image
          src="/logo.png"
          alt="GP Agarwal Logo"
          className="footer-logo mb-3"
        />
      </Container>
      <Container>
        <Row className="footer-links-container">
          <Col className="footer-col">
            <h5 className="cambria-bold">Who We Are</h5>
            <Nav className="flex-column">
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <Nav.Link href="#founders-journey">Founder's Journey</Nav.Link>
            </Nav>
          </Col>
          <Col className="footer-col">
            <h5 className="cambria-bold">Our Businesses</h5>
            <Nav className="flex-column">
              <Nav.Link href="/steel">Steel</Nav.Link>
              <Nav.Link href="/casting">Casting</Nav.Link>
              <Nav.Link href="/power">Power</Nav.Link>
            </Nav>
          </Col>
          <Col className="footer-col">
            <h5 className="cambria-bold">Sustainability</h5>
            <Nav className="flex-column">
              <Nav.Link href="/Sustainability">CSR</Nav.Link>
              <Nav.Link href="/Sustainability">ESG</Nav.Link>
            </Nav>
          </Col>
          <Col className="footer-col">
            <h5 className="cambria-bold">Partners</h5>
            <Nav className="flex-column">
              <Nav.Link href="/suppliers">Suppliers</Nav.Link>
              <Nav.Link href="/customers">Customers</Nav.Link>
            </Nav>
          </Col>
          <Col className="footer-col">
            <h5 className="cambria-bold">Careers</h5>
            <Nav className="flex-column">
              <Nav.Link href="/media" className="cambria-bold ">
                Media
              </Nav.Link>
              <Nav.Link href="/contact-us" className="cambria-bold">
                Contact Us
              </Nav.Link>
              <Nav.Link href="/news" className="cambria-bold">
                News & Features
              </Nav.Link>
            </Nav>
          </Col>
          <Col className="footer-col-2">
            <p>
              <strong>Corporate Office:</strong> 6-5-654,15th Floor, Pranava`s
              One, Panjagutta Rd, Somajiguda, Hyderabad, Telangana 500082.
            </p>
            <p className="my-2">
              <strong>Plant Location:</strong> 167, Madhavaram Village,
              Mantralayam Mandal, Kurnool Dist-518349, (A.P).
            </p>
            <p>
              <a
                className="text-decoration-none text-black mt-2"
                href="tel:+91 40 2939 6799"
              >
                Tel: +91 40 2939 6799{" "}
              </a>
            </p>
            <p>
              <a
                href="mailto:Inquiry@marutiispat.in"
                className="text-decoration-none text-black mt-2"
              >
                Email: Inquiry@marutiispat.in
              </a>
            </p>
          </Col>
        </Row>
        <Row className="my-4 flex-column flex-md-row">
          <Col flex-grow-1>
            <ul className="helvetica-neue-reg-it">
              <li className="">Terms and condition</li>
              <li>Legal Notice</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col className="d-flex justify-content-end column-gap-3 flex-shrink-1  flex-grow-0 mt-2">
            <a href="http://www.google.com" target="__blank">
              <Image
                src="/social/LogoInstagram.svg"
                alt="Linked In"
                className=""
              />
            </a>
            <a href="http://www.google.com" target="__blank">
              <Image src="/social/X.svg" alt="Linked In" className="" />
            </a>
            <a href="http://www.google.com" target="__blank">
              <Image
                src="/social/LogoYouTube.svg"
                alt="Linked In"
                className=""
              />
            </a>
            <a href="http://www.google.com" target="__blank">
              <Image src="/social/LinkedIn.svg" alt="Linked In" className="" />
            </a>
          </Col>
        </Row>
      </Container>
      <p
        className="text-center p-2  fs-7"
        style={{ backgroundColor: "#F0F0F0", color: "#979797" }}
      >
        Copyright © 2025 GP Agarwal Group. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
