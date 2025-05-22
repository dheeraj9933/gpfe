const React = require('react');
const { Container, Navbar, Nav, Row, Col, Image, Card, Form, Button } = require('react-bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');

const Partners = () => {
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
              <h1 className="display-4">Together, We Build the Future</h1>
              <p className="lead">
                At GP Agarwal Group, partnerships are the foundation of our growth—driving innovation, sustainability, and shared success across industries.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partner Ecosystem Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <Image src="https://picsum.photos/600/400" alt="Partner Ecosystem" fluid className="rounded shadow" />
            </Col>
            <Col md={6}>
              <h2>Our Partner Ecosystem</h2>
              <p>
                Collaboration is at the heart of what we do. Our partners—ranging from raw material suppliers to global distributors—play a critical role in our journey to deliver high-quality steel and sustainable solutions.
              </p>
              <p>
                Through strategic alliances, we ensure a seamless supply chain, foster innovation, and create value for all stakeholders while maintaining our commitment to ethical practices and sustainability.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Global Presence Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Global Presence</h2>
          <Row>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="North America" />
                <Card.Body>
                  <Card.Title>North America</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Europe" />
                <Card.Body>
                  <Card.Title>Europe</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Middle East" />
                <Card.Body>
                  <Card.Title>Middle East</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <Card className="border-0 text-center">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Africa" />
                <Card.Body>
                  <Card.Title>Africa</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border-0 text-center">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Asia Pacific" />
                <Card.Body>
                  <Card.Title>Asia Pacific</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partner Testimonials Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">What Our Partners Say</h2>
          <Row>
            <Col md={4}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Text>
                    “GP Agarwal has been a reliable partner, delivering consistent quality and sustainable steel solutions for our projects.”
                  </Card.Text>
                  <Card.Text><strong>John Doe, CEO of SteelCorp</strong></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Text>
                    “Their commitment to ethical practices and innovation makes them a trusted partner in our supply chain.”
                  </Card.Text>
                  <Card.Text><strong>Jane Smith, Procurement Head at BuildMax</strong></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Text>
                    “Working with GP Agarwal has helped us achieve our sustainability goals while meeting project deadlines.”
                  </Card.Text>
                  <Card.Text><strong>Ahmed Khan, Director at InfraGlobal</strong></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Collaboration Highlights Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Collaboration Highlights</h2>
          <Row>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Highlight 1" />
                <Card.Body>
                  <Card.Title>Partnered with SteelCorp for Mega Infrastructure Project</Card.Title>
                  <Card.Text>Supplied 50,000 tons of steel for a landmark bridge project in North America.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Highlight 2" />
                <Card.Body>
                  <Card.Title>Sustainable Supply Chain with BuildMax</Card.Title>
                  <Card.Text>Implemented eco-friendly logistics for steel delivery across Europe.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Highlight 3" />
                <Card.Body>
                  <Card.Title>Innovation with InfraGlobal</Card.Title>
                  <Card.Text>Developed high-tensile steel solutions for solar energy projects in the Middle East.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partnership Inquiry Form Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Interested in Partnering with Us?</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="companyName">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter company name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="contactPerson">
                      <Form.Label>Contact Person</Form.Label>
                      <Form.Control type="text" placeholder="Enter contact person name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="partnershipType">
                  <Form.Label>Type of Partnership</Form.Label>
                  <Form.Control as="select">
                    <option>Select Type</option>
                    <option>Supplier</option>
                    <option>Distributor</option>
                    <option>Technology Partner</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Tell us about your partnership interest" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit Inquiry
                </Button>
              </Form>
            </Col>
          </Row>
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

module.exports = Partners;