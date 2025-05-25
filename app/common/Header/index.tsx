import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";

import { ChevronDown, Search } from "react-bootstrap-icons";
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
      if (location.pathname === "/contact-us") return;
      setScrolled(window.scrollY > 50); // adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // This runs on every URL change
    if (location.pathname === "/contact-us") {
      setScrolled(true);
    }

    // You can put any logic here (e.g., analytics, fetch, scroll)
  }, [location.pathname]);
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
            padding: "14px 20px",
          }}
          className={scrolled ? "bg-white shadow-sm" : ""}
        >
          <Container className="d-flex justify-content-between align-items-center text-white nav-container">
            <div className="flex-shrink-0 ">
              <Navbar.Brand
                href="/"
                className="position-absolute"
                style={{ top: "0", padding: "0px" }}
              >
                <Image src="/logo2.png" />
              </Navbar.Brand>
            </div>

            {/* Middle section (slightly right of center) */}
            <div
              className={`position-absolute start-50 translate-middle-x ${
                scrolled ? "" : ""
              }`}
              style={{ left: "55%" }}
            >
              <Nav className="me-auto">
                <NavDropdown
                  title={
                    <span>
                      Who we are <ChevronDown />
                    </span>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/about-us">About us</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Founders Journey
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <span>
                      Our Business <ChevronDown />
                    </span>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/steel">Steel</NavDropdown.Item>
                  <NavDropdown.Item href="/casting">Casting</NavDropdown.Item>
                  <NavDropdown.Item href="/power">Power</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Sustainability">Sustainability</Nav.Link>
                <Nav.Link href="/careers">Careers</Nav.Link>
                <NavDropdown
                  title={
                    <span>
                      Partners <ChevronDown />
                    </span>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/suppliers">
                    Suppliers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/customers">
                    Customers
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              </Nav>
            </div>

            {/* Right section */}
            <div
              className={`flex-shrink-0 d-flex align-items-center position-relative ${
                scrolled ? "right-nav-container" : ""
              }`}
              // style={{ paddingTop: "22px" }}
            >
              <Search
                style={{ fontWeight: "bold", transform: "scale(1.2)" }}
                className={`fw-bold ${scrolled ? "search-icon" : ""}`}
              />
              <Form.Select
                className="ms-2 rounded-4 transparent-select"
                size="sm"
                aria-label="Default select example"
                style={{
                  backgroundColor: `${scrolled ? "white" : "transparent"}`,
                  color: `${scrolled ? "black" : "white"}`,
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
      <footer className="">
        <Container className="d-flex flex-column align-items-center">
          <Image
            src="logo.png"
            alt="GP Agarwal Logo"
            className="footer-logo mb-3"
          />
        </Container>
        <Container>
          <Row className="footer-links-container">
            <Col md={2}>
              <h5 className="cambria-bold">Who We Are</h5>
              <Nav className="flex-column">
                <Nav.Link href="#about-us">About Us</Nav.Link>
                <Nav.Link href="#founders-journey">Founder's Journey</Nav.Link>
              </Nav>
            </Col>
            <Col md={2}>
              <h5 className="cambria-bold">Our Businesses</h5>
              <Nav className="flex-column">
                <Nav.Link href="#steel">Steel</Nav.Link>
                <Nav.Link href="#casting">Casting</Nav.Link>
                <Nav.Link href="#power">Power</Nav.Link>
              </Nav>
            </Col>
            <Col md={2}>
              <h5 className="cambria-bold">Sustainability</h5>
              <Nav className="flex-column">
                <Nav.Link href="#steel">Steel</Nav.Link>
                <Nav.Link href="#casting">Casting</Nav.Link>
                <Nav.Link href="#power">Power</Nav.Link>
              </Nav>
            </Col>
            <Col md={2}>
              <h5 className="cambria-bold">Partners</h5>
              <Nav className="flex-column">
                <Nav.Link href="#steel">Steel</Nav.Link>
                <Nav.Link href="#casting">Casting</Nav.Link>
                <Nav.Link href="#power">Power</Nav.Link>
              </Nav>
            </Col>
            <Col md={2}>
              <h5 className="cambria-bold">Careers</h5>
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
              <p className="">
                Rama Towers, 5-4-83, 2nd Floor, TSK Chambers, M.G. Road,
                Secunderabad-500003
              </p>
              <a
                href="tel:+919002345678"
                className="text-decoration-none text-black mt-2"
              >
                Tel: +91 9002345678
              </a>
              <br />
              <a
                href="mailto:info@gpagarwalgroup.com"
                className="text-decoration-none text-black mt-2"
              >
                Email:info@gpagarwal.com
              </a>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <ul className="helvetica-neue-reg-it">
                <li className="">Terms and condition</li>
                <li>Legal Notice</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col className="d-flex justify-content-end column-gap-3">
              <a href="http://www.google.com" target="__blank">
                <Image
                  src="social/LogoInstagram.svg"
                  alt="Linked In"
                  className=""
                />
              </a>
              <a href="http://www.google.com" target="__blank">
                <Image src="social/X.svg" alt="Linked In" className="" />
              </a>
              <a href="http://www.google.com" target="__blank">
                <Image
                  src="social/LogoYouTube.svg"
                  alt="Linked In"
                  className=""
                />
              </a>
              <a href="http://www.google.com" target="__blank">
                <Image src="social/LinkedIn.svg" alt="Linked In" className="" />
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
    </>
  );
};

export default Header;
