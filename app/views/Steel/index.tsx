const React = require('react');
const { Container, Navbar, Nav, Row, Col, Image, Card, Button } = require('react-bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');

const SteelBusiness = () => {
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
              <h1 className="display-4">Steel — The Backbone of Our Industrial Strength</h1>
              <p className="lead">Forging Quality, Delivering Excellence</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Steel Ecosystem Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <Image src="https://picsum.photos/600/400" alt="Steel Ecosystem" fluid className="rounded shadow" />
            </Col>
            <Col md={6}>
              <h2>The Steel Ecosystem</h2>
              <p>Steel lies at the core of GP Agarwal Group’s journey—a symbol of our commitment to building India’s industrial future with strength, precision, and purpose.</p>
              <p>Through our flagship entity, Maruti Ispat & Pipes Pvt. Ltd. (MIPPL), we have emerged as one of South India’s largest integrated steel plants—spread across 200+ acres in Martsalayam, Andhra Pradesh. It allows us to control every step of the production process—from raw material to finished product.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What We Offer Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">What We Offer</h2>
          <Row>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Sponge Iron" />
                <Card.Body>
                  <Card.Title>Sponge Iron</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Steel Billets" />
                <Card.Body>
                  <Card.Title>Steel Billets</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="ERW Steel Pipes" />
                <Card.Body>
                  <Card.Title>ERW Steel Pipes</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Hot Rolled Coils" />
                <Card.Body>
                  <Card.Title>Hot Rolled Coils</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="High-Tensile Solutions" />
                <Card.Body>
                  <Card.Title>High-Tensile Solutions</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Infrastructure Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Key Infrastructure</h2>
          <Row className="text-center">
            <Col md={3}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>300 TPD Sponge Iron Kilns</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>Concast AG Steel Melting Induction</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>1.7 MTPA Hot Strip Mill</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>8 MW WHRB Clean Power</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col md={6}>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>In-house R&D Lab</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Industries We Serve</h2>
          <Row>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Infrastructure & Construction" />
                <Card.Body>
                  <Card.Title>Infrastructure & Construction</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Oil & Gas" />
                <Card.Body>
                  <Card.Title>Oil & Gas</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Power & Energy" />
                <Card.Body>
                  <Card.Title>Power & Energy</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Railways" />
                <Card.Body>
                  <Card.Title>Railways</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Automotive" />
                <Card.Body>
                  <Card.Title>Automotive</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Water" />
                <Card.Body>
                  <Card.Title>Water</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Agriculture" />
                <Card.Body>
                  <Card.Title>Agriculture</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="Solar" />
                <Card.Body>
                  <Card.Title>Solar</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Roadmap Section */}
      <section className="py-5 bg-success text-white">
        <Container>
          <Row>
            <Col md={6}>
              <Image src="https://picsum.photos/600/400" alt="Roadmap" fluid className="rounded shadow" />
            </Col>
            <Col md={6}>
              <h2>Our roadmap for building a sustainable, responsible future is not limited to today.</h2>
              <p>We are investing in long-term solutions that protect our environment, generations to come, and build resilience for the future.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* News & Features Section */}
      <section className="py-5">
        <Container>
          <h2>News & Features</h2>
          <Row>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="News 1" />
                <Card.Body>
                  <Card.Title>Chairman Shankaran Merges with businesses, community initiatives</Card.Title>
                  <Card.Text>Get the latest news and updates on our business, community initiatives, and more.</Card.Text>
                  <Button variant="link" className="p-0">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="News 2" />
                <Card.Body>
                  <Card.Title>Chairman Shankaran on business, community initiatives</Card.Title>
                  <Card.Text>Get the latest news and updates on our business, community initiatives, and more.</Card.Text>
                  <Button variant="link" className="p-0">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img variant="top" src="https://picsum.photos/400/300" alt="News 3" />
                <Card.Body>
                  <Card.Title>Chairman Shankaran on business, community initiatives</Card.Title>
                  <Card.Text>Get the latest news and updates on our business, community initiatives, and more.</Card.Text>
                  <Button variant="link" className="p-0">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* The Road Ahead Section */}
      <section className="py-5 text-center" style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/1200/600)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Container>
          <h2 className="text-white">The Road Ahead</h2>
          <h3 className="text-white">At GP Agarwal Group, our commitment to sustainability is limited to empowering communities, and it builds resilience for the generations to come.</h3>
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

module.exports = SteelBusiness;