const React = require('react');
const { Container, Navbar, Nav, Row, Col, Image, Card, Button } = require('react-bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');

const WhoWeAre = () => {
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
              <h1 className="display-4">Who We Are</h1>
              <p className="lead">
                Building a legacy of industrial excellence, innovation, and social impact since 1975.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Us Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <Image src="https://picsum.photos/600/400" alt="About Us" fluid className="rounded shadow" />
            </Col>
            <Col md={6}>
              <h2>About GP Agarwal Group</h2>
              <p>
                Established in 1975, GP Agarwal Group has grown into one of India’s leading industrial conglomerates, with a strong presence in steel, casting, and power generation. Headquartered in Secunderabad, we operate with a commitment to quality, sustainability, and community development.
              </p>
              <p>
                Our flagship entity, Maruti Ispat & Pipes Pvt. Ltd., is one of South India’s largest integrated steel plants, spanning over 200 acres in Andhra Pradesh. We are driven by a vision to create a better future through innovation and ethical practices.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Journey</h2>
          <Row>
            <Col md={3}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>1975</Card.Title>
                  <Card.Text>Founded as a small steel trading firm in Secunderabad.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>1990</Card.Title>
                  <Card.Text>Expanded into steel manufacturing with the first plant in Andhra Pradesh.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>2005</Card.Title>
                  <Card.Text>Introduced clean energy with an 8 MW WHRB power plant.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>2020</Card.Title>
                  <Card.Text>Became one of South India’s largest integrated steel plants.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Leadership Team Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Our Leadership Team</h2>
          <Row>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Img variant="top" src="https://picsum.photos/200/200" alt="Shankaran Agarwal" className="rounded-circle mx-auto" style={{ width: '150px', height: '150px' }} />
                <Card.Body>
                  <Card.Title>Shankaran Agarwal</Card.Title>
                  <Card.Text>Chairman</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Img variant="top" src="https://picsum.photos/200/200" alt="Rahul Agarwal" className="rounded-circle mx-auto" style={{ width: '150px', height: '150px' }} />
                <Card.Body>
                  <Card.Title>Rahul Agarwal</Card.Title>
                  <Card.Text>Managing Director</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Img variant="top" src="https://picsum.photos/200/200" alt="Priya Sharma" className="rounded-circle mx-auto" style={{ width: '150px', height: '150px' }} />
                <Card.Body>
                  <Card.Title>Priya Sharma</Card.Title>
                  <Card.Text>Chief Sustainability Officer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Vision, Mission, and Values</h2>
          <Row>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>Vision</Card.Title>
                  <Card.Text>
                    To be a global leader in sustainable industrial solutions, creating lasting value for our stakeholders and the planet.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>Mission</Card.Title>
                  <Card.Text>
                    Deliver innovative, high-quality products while fostering community growth and environmental stewardship.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <Card.Title>Values</Card.Title>
                  <Card.Text>
                    Integrity, Innovation, Sustainability, and Community Focus.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Community Impact Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Our Community Impact</h2>
          <Row>
            <Col md={6}>
              <Image src="https://picsum.photos/600/400" alt="Community Impact" fluid className="rounded shadow" />
            </Col>
            <Col md={6}>
              <h3>Building Stronger Communities</h3>
              <p>
                At GP Agarwal Group, we believe in giving back. Through education programs, healthcare initiatives, and livelihood support, we’ve impacted thousands of lives across Andhra Pradesh and beyond.
              </p>
              <ul>
                <li>Supported education for over 5,000 children annually.</li>
                <li>Provided healthcare access to rural communities.</li>
                <li>Planted 4 million saplings to promote reforestation.</li>
              </ul>
              <Button variant="primary" href="#sustainability">Learn More</Button>
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

module.exports = WhoWeAre;