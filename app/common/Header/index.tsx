import React from "react";
import { Outlet } from "react-router";

import { Search } from "react-bootstrap-icons";
import './style.scss'
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
  return (
    <>
      <header className="header">
        <Navbar data-bs-theme="transparent" style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "transparent",
          padding: "0px 20px",
          // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}>
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
              className="position-absolute start-50 translate-middle-x pt-4"
              style={{ left: "55%" }}
            >
              <Nav className="me-auto">
                <NavDropdown title="Who we are" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about-us">
                    About us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Founders Journey
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Our Business" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/steel">
                    Steel
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/casting">
                    Casting
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/power">
                    Power
                  </NavDropdown.Item>
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
            <div className="flex-shrink-0 d-flex align-items-center pt-4">
              <Search
                style={{ fontWeight: "bold", transform: "scale(1.2)" }}
                className="fw-bold"
              />
              <Form.Select
                className="ms-2 rounded-4"
                size="sm"
                aria-label="Default select example"
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
    </>
  );
};

export default Header;
