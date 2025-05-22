import React from "react";
import { Outlet } from "react-router";

import { Search } from "react-bootstrap-icons";

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
      <header className="">
        <Navbar bg="#fff" data-bs-theme="light">
          <Container className="d-flex justify-content-between align-items-center py-3">
            <div className="flex-shrink-0 ">
              <Navbar.Brand
                href="/"
                className="position-absolute"
                style={{ top: "10px" }}
              >
                <Image src="/home.png" />
              </Navbar.Brand>
            </div>

            {/* Middle section (slightly right of center) */}
            <div
              className="position-absolute start-50 translate-middle-x"
              style={{ left: "55%" }}
            >
              <Nav className="me-auto fw-bold">
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
            <div className="flex-shrink-0 d-flex align-items-center">
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
