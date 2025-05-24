import React from 'react';
import { Container, Navbar, Nav, Row, Col, Image, Form, Button, Card } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <div>

      {/* Contact Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <Image src="https://picsum.photos/600/400" alt="Office" fluid className="rounded shadow" />
            </Col>
            <Col md={6}>
              <h2 className="text-warning">CONTACT US</h2>
              <h1>Let's Get in Touch</h1>
              <p>
                Or reach out manually to <a href="mailto:hello@gpagarwal.com" className="text-danger">hello@gpagarwal.com</a>
              </p>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your first name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your last name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your main text here" />
                </Form.Group>
                <Button variant="danger" type="submit">
                  Submit Form
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Reach Out Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-warning">REACH OUT TO US</h2>
          <h1>We’d Love to Hear From You.</h1>
          <p>
            Or reach out manually to <a href="mailto:hello@gpagarwal.com" className="text-danger">hello@gpagarwal.com</a>
          </p>
          <Row className="mt-5">
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>Email Support</Card.Title>
                  <Card.Text>Our team will get back shortly.</Card.Text>
                  <Card.Text>
                    <a href="mailto:hello@gpagarwal.com" className="text-danger">hello@gpagarwal.com</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>Visit Our Office</Card.Title>
                  <Card.Text>Visit the location in real life.</Card.Text>
                  <Card.Text>Rama Towers, 5-4-83, Secunderabad</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>Call Us Directly</Card.Title>
                  <Card.Text>Available working hours.</Card.Text>
                  <Card.Text>
                    <a href="tel:+919002345678" className="text-dark">+91 9002345678</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Media Section */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <h2>Social Media Channels</h2>
          <Nav className="justify-content-center">
            <Nav.Link href="#facebook" className="text-white">Facebook</Nav.Link>
            <Nav.Link href="#twitter" className="text-white">Twitter</Nav.Link>
            <Nav.Link href="#instagram" className="text-white">Instagram</Nav.Link>
            <Nav.Link href="#youtube" className="text-white">YouTube</Nav.Link>
            <Nav.Link href="#linkedin" className="text-white">LinkedIn</Nav.Link>
          </Nav>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-light">
        <Container>
          <Row>
            <Col md={3}>
              <Image src="https://picsum.photos/50/50" alt="GP Agarwal Logo" className="mb-3" />
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
              <p>Rama Towers, 5-4-83, 2nd Floor, TSK Chambers, M.G. Road, Secunderabad-500003</p>
              <p>Tel: +91 9002345678</p>
              <p>Fax: +91 22 6359000</p>
            </Col>
          </Row>
          <hr />
          <p className="text-center">Copyright © 2025 GP Agarwal Group. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default ContactUs;