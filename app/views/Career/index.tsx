const React = require('react');
const { Container, Navbar, Nav, Row, Col, Image, Card, Form, Button } = require('react-bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');

const Careers = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="https://picsum.photos/50/50" alt="GP Agarwal Logo" />
            <span className="ms-2">GP Agarwal</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#who-we-are">Who We Are</Nav.Link>
              <Nav.Link href="#our-businesses">Our Businesses</Nav.Link>
              <Nav.Link href="#sustainability">Sustainability</Nav.Link>
              <Nav.Link href="#partners">Partners</Nav.Link>
              <Nav.Link href="#careers">Careers</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/1200/600)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Container>
          <Row>
            <Col md={8}>
              <h1 className="display-4">Build Your Future with GP Agarwal Group</h1>
              <p className="lead">
                Join a legacy of excellence, innovation, and purpose that shapes industries and communities.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Work Culture Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <Image src="https://picsum.photos/600/400" alt="Work Culture" fluid className="rounded shadow" />
            </Col>
            <Col md={6}>
              <h2>Our Work Culture</h2>
              <h3>A Culture of Growth and Purpose</h3>
              <p>
                People are our most valuable asset. Whether in the steel plant, power facilities, or corporate offices, we foster a culture of respect, empowerment, and teamwork. We provide a space to learn, lead, and grow—because when our people grow, our business grows.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Value Proposition Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Why Work With Us? Our Employee Value Proposition</h2>
          <Row>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>Values-Driven</Card.Title>
                  <Card.Text>
                    We uphold integrity, purpose, and empathy in our decisions, projects, and partnerships—shaping who we are and how we operate.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>Strong Legacy</Card.Title>
                  <Card.Text>
                    With decades of industrial expertise, we offer a record of success. When you join us, you become part of a legacy of industry leadership.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>Career Growth</Card.Title>
                  <Card.Text>
                    Whether you’re just starting out or a seasoned professional, we provide ample opportunities for learning, promoting within, and recognizing potential at every level.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>Inclusive Environment</Card.Title>
                  <Card.Text>
                    Our employees are at the heart of our organization. We are inclusive, empathetic, and value every voice to be heard and valued.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>Stability & Scale</Card.Title>
                  <Card.Text>
                    Be part of one of India’s leading integrated steel manufacturers—GP Agarwal Group is building impact across industries.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Current Openings Section */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <h2 className="text-center mb-5">Current Openings at GP Agarwal Group</h2>
          <Row>
            <Col md={6}>
              <Card className="bg-primary text-white border-0">
                <Card.Body>
                  <Card.Title>Mechanical Engineer – Steel Division</Card.Title>
                  <Card.Text>Mart. Kolta</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="bg-primary text-white border-0">
                <Card.Body>
                  <Card.Title>Sustainability Officer – Corporate Office</Card.Title>
                  <Card.Text>Mart. Kolta</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <Card className="bg-primary text-white border-0">
                <Card.Body>
                  <Card.Title>Business Analyst – Strategy & Development Group</Card.Title>
                  <Card.Text>Hyderabad</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="bg-primary text-white border-0">
                <Card.Body>
                  <Card.Title>Manager – Global Sales Division</Card.Title>
                  <Card.Text>Hyderabad</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <Card className="bg-primary text-white border-0">
                <Card.Body>
                  <Card.Title>HR Executive – Plant Operations</Card.Title>
                  <Card.Text>Hyderabad</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="bg-primary text-white border-0">
                <Card.Body>
                  <Card.Title>Financial Analyst, GP Agarwal Group</Card.Title>
                  <Card.Text>Hyderabad</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Life at GP Agarwal Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Life at GP Agarwal Group</h2>
          <Row>
            <Col md={4}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Text>
                    “The company has supported my growth with a trainee to team lead – the learning opportunities here are unmatched.”
                  </Card.Text>
                  <Card.Text><strong>Rahul Varma</strong></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Health & Wellness" />
                <Card.Body>
                  <Card.Title>Health & Wellness Program</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Monthly R&R" />
                <Card.Body>
                  <Card.Title>Monthly R&R Program</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Diwali Celebrations" />
                <Card.Body>
                  <Card.Title>Diwali Celebrations</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Annual Day" />
                <Card.Body>
                  <Card.Title>Annual Day</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Application Form Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Reach Us – Submit Your Application</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="role">
                  <Form.Label>Role</Form.Label>
                  <Form.Control as="select">
                    <option>Select Role</option>
                    <option>Mechanical Engineer – Steel Division</option>
                    <option>Sustainability Officer – Corporate Office</option>
                    <option>Business Analyst – Strategy & Development Group</option>
                    <option>Manager – Global Sales Division</option>
                    <option>HR Executive – Plant Operations</option>
                    <option>Financial Analyst, GP Agarwal Group</option>
                  </Form.Control>
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="resume">
                      <Form.Label>Upload Resume (PDF or DOC, 10MB)</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Button variant="primary" className="mt-4">Upload Resume</Button>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="coverLetter">
                  <Form.Label>Message / Cover Letter</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your cover letter here" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit Form
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 text-center" style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/1200/600)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Container>
          <h2 className="text-white">Let’s Grow Together</h2>
          <h3 className="text-white">
            Whether you’re just starting out or looking to take your career to the next level, GP Agarwal Group offers the platform, mentoring, and vision to thrive. Step into the future with us.
          </h3>
          <Button variant="light" href="#careers" className="mt-3">Get Started</Button>
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

module.exports = Careers;   