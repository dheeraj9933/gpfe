import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";

import { Search } from "react-bootstrap-icons";
import "./style.scss";
import Navbar from "react-bootstrap/Navbar";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Image,
  Nav,
  NavDropdown,
  Row,
} from "react-bootstrap";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className="header">
        <Navbar
          data-bs-theme="transparent"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "transparent",
            padding: "0px 20px",
          }}
          className={scrolled ? "bg-white shadow-sm" : ""}
        >
          <Container className="d-flex justify-content-between align-items-center px-3 text-white">
            <div className="flex-shrink-0 ">
              <Navbar.Brand
                href="/"
                className="position-absolute"
                style={{ top: "0", padding: "0px" }}
              >
                <Image src="/home.png" />
              </Navbar.Brand>
            </div>

            {/* Middle section (slightly right of center) */}
            <div
              className={`position-absolute start-50 translate-middle-x pt-4 ${
                scrolled ? "pb-3" : ""
              }`}
              style={{ left: "55%" }}
            >
              <Nav className="me-auto">
                <NavDropdown title="Who we are" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about-us">About us</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Founders Journey
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Our Business" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/steel">Steel</NavDropdown.Item>
                  <NavDropdown.Item href="/casting">Casting</NavDropdown.Item>
                  <NavDropdown.Item href="/power">Power</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Sustainability">Sustainability</Nav.Link>
                <Nav.Link href="/careers">Careers</Nav.Link>
                <NavDropdown title="Partners" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/suppliers">
                    Suppliers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/customers">
                    Customers
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing">Contact Us</Nav.Link>
              </Nav>
            </div>

            {/* Right section */}
            <div
              className={`flex-shrink-0 d-flex align-items-center pt-4 ${
                scrolled ? "pb-2" : ""
              }`}
            >
              <Search
                style={{ fontWeight: "bold", transform: "scale(1.2)" }}
                className="fw-bold"
              />
              <Form.Select
                className="ms-2 rounded-4 transparent-select"
                size="sm"
                aria-label="Default select example"
                style={{
                  backgroundColor: `${scrolled ? "white" : "transparent"}`,
                  color: `${scrolled ? "black" : "white"}`
                }}
              >
                <option>Eng</option>
                <option value="1">Eng</option>
                <option value="2">Hindi</option>
                <option value="3">Spanish</option>
              </Form.Select>
            </div>
          </Container>
        </Navbar>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="pt-5 bg-light">
        <Container className="d-flex flex-column align-items-center">
          <Image src="footer-logo.png" alt="GP Agarwal Logo" className="mb-3" />
        </Container>
        <Container>
          <Row className="footer-links-container">
            <Col md={2}>
              <h5>Who We Are</h5>
              <Nav className="flex-column">
                <Nav.Link href="#about-us">About Us</Nav.Link>
                <Nav.Link href="#founders-journey">Founder's Journey</Nav.Link>
              </Nav>
            </Col>
            <Col md={2}>
              <h5>Our Businesses</h5>
              <Nav className="flex-column">
                <Nav.Link href="#steel">Steel</Nav.Link>
                <Nav.Link href="#casting">Casting</Nav.Link>
                <Nav.Link href="#power">Power</Nav.Link>
              </Nav>
            </Col>
            <Col md={2}>
              <h5>Sustainability</h5>
              <Nav className="flex-column">
                <Nav.Link href="#steel">Steel</Nav.Link>
                <Nav.Link href="#casting">Casting</Nav.Link>
                <Nav.Link href="#power">Power</Nav.Link>
              </Nav>
            </Col>
            <Col md={2}>
              <h5>Partners</h5>
              <Nav className="flex-column">
                <Nav.Link href="#steel">Steel</Nav.Link>
                <Nav.Link href="#casting">Casting</Nav.Link>
                <Nav.Link href="#power">Power</Nav.Link>
              </Nav>
            </Col>
            <Col md={2}>
              <h5 className="">Careers</h5>
              <Nav className="flex-column">
                <Nav.Link href="#steel" className="bold-link">
                  Media
                </Nav.Link>
                <Nav.Link href="#casting" className="bold-link">
                  Contact Us
                </Nav.Link>
                <Nav.Link href="#power" className="bold-link">
                  News & Features
                </Nav.Link>
              </Nav>
            </Col>
            <Col md={2}>
              <p className="fs-7">
                Rama Towers, 5-4-83, 2nd Floor, TSK Chambers, M.G. Road,
                Secunderabad-500003
              </p>
              <p className="fs-7">Tel: +91 9002345678</p>
              <p className="fs-7">Fax: +91 22 6359000</p>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <ul>
                <li>Terms and condition</li>
                <li>Legal Notice</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col className="d-flex justify-content-end">
              <Image
                src="/footer-social.png"
                alt="Social Media Icons"
                className="footer-social"
              />
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
    </>
  );
};

export default Header;
