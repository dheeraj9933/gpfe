import React, { useEffect, useState } from "react";

import { ChevronDown, Search } from "react-bootstrap-icons";
import Navbar from "react-bootstrap/Navbar";
import { Container, Form, Image, Nav, NavDropdown } from "react-bootstrap";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/contact-us" || location.pathname === "/media") return;
      setScrolled(window.scrollY > 50); // adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // This runs on every URL change
    if (location.pathname === "/contact-us" || location.pathname === "/media") {
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
            <Nav className="ms-auto column-gap-2">
              <Nav.Link href="/about-us">Who we are</Nav.Link>

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
              <NavDropdown
                title={
                  <span>
                    Partners<ChevronDown />
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/suppliers">Suppliers</NavDropdown.Item>
                <NavDropdown.Item href="/customers">
                  Customers
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/careers">Careers</Nav.Link>

              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            </Nav>

            {/* Right section */}
            {/* <div
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
            </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
