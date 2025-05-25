import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Image,
  Form,
  Button,
  Card,
  InputGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import HalfHalfSection from "~/common/HalfHalfSection";

const ContactUs = () => {
  return (
    <div>
      {/* Contact Section */}
      <section className="padding-y-100" style={{ marginTop: "50px" }}>
        <HalfHalfSection
          leftContent={
            <Image
              src="Contact/form.png"
              alt="Work Culture"
              fluid
              className="shadow border-rounded"
            />
          }
          rightContent={
            <div className="d-flex flex-column gap-3">
              <h2 className="orange-text h4 m-0 helvetica-neue-reg">CONTACT US</h2>
              <h1 className="h2 cambria-bold ">Let's Get in Touch</h1>
              <p className="fs-5">
                Or reach out manually to{" "}
                <a
                  href="mailto:hello@gpagarwalgroup.com"
                  className="text-danger text-decoration-none"
                >
                  hello@gpagarwalgroup.com
                </a>
              </p>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="firstName">
                      <Form.Label className="fw-semi-bold">
                        First Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        className="light-form-bg"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="lastName">
                      <Form.Label className="fw-semi-bold">
                        Last Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        className="light-form-bg"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="fw-semi-bold">
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="light-form-bg"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label className="fw-semi-bold">Phone Number</Form.Label>
                  <InputGroup className="mb-3">
                    <DropdownButton
                      variant="light-form-bg"
                      title="IN"
                      id="input-group-dropdown-1"
                      className="light-form-bg"
                      style={{ backgroundColor: "red" }}
                    >
                      <Dropdown.Item href="#">US</Dropdown.Item>
                      <Dropdown.Item href="#">CA</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control
                      className="light-form-bg"
                      aria-label="Text input with dropdown button"
                      placeholder="Enter your number"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label className="fw-semi-bold">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your main text here"
                    className="light-form-bg"
                  />
                </Form.Group>
                <div className="d-grid fw-semi-bold">
                  <Button variant="danger" type="submit">
                    Submit Form <ArrowRight className="fs-5" />
                  </Button>
                </div>
              </Form>
            </div>
          }
        />
      </section>

      {/* Reach Out Section */}
      <section className="py-5 ">
        <Container>
          <h2 className="text-warning h4 helvetica-neue-reg">REACH OUT TO US</h2>
          <h1 className="h3 fw-bold cambria-bold">We’d Love to Hear From You.</h1>
          <p className="fs-5">
            Or reach out manually to{" "}
            <a
              href="mailto:hello@gpagarwal.com"
              className="text-danger text-decoration-none"
            >
              hello@gpagarwal.com
            </a>
          </p>
          <Row className="mt-5">
            <Col md={4}>
              <Card className="border-0 light-border p-2 border-rounded">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src="Contact/contact1.svg"
                    alt="Clean Manufacturing"
                    className="rounded-circle mb-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <Card.Title>Email Support</Card.Title>
                  <Card.Text>Our team will get back shortly.</Card.Text>
                  <Card.Text>
                    <a
                      href="mailto:hello@gpagarwal.com"
                      className="text-danger"
                    >
                      hello@gpagarwal.com
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 light-border p-2 border-rounded">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src="Contact/contact2.svg"
                    alt="Clean Manufacturing"
                    className="rounded-circle mb-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <Card.Title>Visit Our Office</Card.Title>
                  <Card.Text>Visit the location in real life.</Card.Text>
                  <Card.Text className="text-danger">
                    Rama Towers, 5-4-83, Secunderabad
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 light-border  p-2 border-rounded">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src="Contact/contact3.svg"
                    alt="Clean Manufacturing"
                    className="rounded-circle mb-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <Card.Title>Call Us Directly</Card.Title>
                  <Card.Text>Available working hours.</Card.Text>
                  <Card.Text>
                    <a href="tel:+919002345678" className="text-danger">
                      +91 9002345678
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Media Section */}
      <section className="py-5 text-white dark-blue-bg">
        <Container>
          <h2 className="text-center">Social Media Channels</h2>
          <Row className="justify-content-center mt-5">
            <Col href="#facebook" className="text-white">
              <Image
                src="Contact/facebook.svg"
                alt="Work Culture"
                fluid
                className="shadow border-rounded me-2"
              />
              <a
                href="http://www.google.com"
                className="link-white"
                target="__blank"
              >
                Facebook
              </a>
            </Col>
            <Col href="#twitter" className="text-white">
              <Image
                src="Contact/x.svg"
                alt="Work Culture"
                fluid
                className="shadow border-rounded me-2"
              />
              <a
                href="http://www.google.com"
                className="link-white"
                target="__blank"
              >
                Twitter
              </a>
            </Col>
            <Col href="#instagram" className="text-white">
              <Image
                src="Contact/instagram.svg"
                alt="Work Culture"
                fluid
                className="shadow border-rounded me-2"
              />
              <a
                href="http://www.google.com"
                className="link-white"
                target="__blank"
              >
                Instagram
              </a>
            </Col>
            <Col href="#youtube" className="text-white">
              <Image
                src="Contact/youtube.svg"
                alt="Work Culture"
                fluid
                className="shadow border-rounded me-2"
              />
              <a
                href="http://www.google.com"
                className="link-white"
                target="__blank"
              >
                YouTube
              </a>
            </Col>
            <Col href="#linkedin" className="text-white">
              <Image
                src="Contact/linkedin.svg"
                alt="Work Culture"
                fluid
                className="shadow border-rounded me-2"
              />
              <a
                href="http://www.google.com"
                className="link-white"
                target="__blank"
              >
                LinkedIn
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContactUs;
