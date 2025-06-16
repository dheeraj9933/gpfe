import React, { useEffect, useState } from "react";

import { ChevronDown, Search } from "react-bootstrap-icons";
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

const Header: React.FC = () => {
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
    <header className="header">
      <Navbar
        collapseOnSelect
        expand="lg"
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
        <Container className="d-flex justify-content-between align-items-center text-white nav-container p-0">
          <div className="flex-shrink-0 ">
            <Navbar.Brand
              href="/"
              className=""
              style={{ top: "0", padding: "0px" }}
            >
              <Image src="/logo.png" style={{}} />
            </Navbar.Brand>
          </div>
          {/* Navbar expand button */}
          <Navbar.Toggle className="" aria-controls="responsive-navbar-nav" />

          {/* Middle section */}
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="mx-auto column-gap-2">
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

              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            </Nav>

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
                  maxWidth: "100px",
                }}
              >
                <option>Eng</option>
                <option value="1">Eng</option>
                <option value="2">Hindi</option>
                <option value="3">Spanish</option>
              </Form.Select>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </header>
  );
};

export default Header;
