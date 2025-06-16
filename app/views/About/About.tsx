import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Image,
  Card,
  Button,
} from "react-bootstrap";
import Banner from "~/common/Banner";
import HalfHalfSection from "~/common/HalfHalfSection";
import "./About.scss";
// import 'react-bootstrap-icons/font/bootstrap-icons.css';
import { Android } from "react-bootstrap-icons";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <Banner image="about/about-banner.png">
        <div className="flex-50" ></div>
        <div className="flex-50 banner-inner-text">
          <div className="">
            <h1 className="fs-2">
              A Legacy Forged in Steel, A Future Built on Purpose
            </h1>
            <p className="lead">
              Every great journey begins with a dream. For us, that dream took
              shape decades ago—to build a legacy that not only builds economies
              but uplifts people.
            </p>
          </div>
        </div>
      </Banner>

      {/* What We Stand For Section */}
      <section className="padding-y-100 position-relative stand-for-section">
        <HalfHalfSection
          leftContent={
            <Image
              src="about/stand.png"
              alt="Industrial Plant"
              fluid
              className="rounded shadow"
            />
          }
          rightContent={
            <div className="d-flex flex-column gap-4">
              <h2 className="fs-3 cambria-bold mt-2">What We Stand For?</h2>
              <p className="fs-5">
                We are a company that manufactures steel—and supports the dreams
                of a better tomorrow.
              </p>
              <p className="fs-5">
                Our plant spans 200+ acres and produces 1,400,000 tons
                annually—but it’s our people, passion, and vision that make us
                who we are.
              </p>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li className="mb-2 fs-5 d-flex align-items-center">
                  <Image src="about/stand1.svg" className="me-2"/>
                  We don’t rely on coal.
                </li>
                <li className="mb-2 fs-5  d-flex align-items-center">
                  <Image src="about/stand2.svg" className="me-2"/>
                  We don’t cut corners.
                </li>
                <li className="mb-2 fs-5 d-flex align-items-center">
                  <Image src="about/stand3.svg" className="me-2"/>
                  We deliver cleaner,
                  ethical production, and innovation with heart.
                </li>
              </ul>
            </div>
          }
        />
        <Image src="bg-poly-4.png" className="bottom-right-bg" />
      </section>

      {/* Mission and Vision Section */}
      <section
        className="text-white banner-img padding-y-100"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(about/mission.jpg)`,
        }}
      >
        <Container className="py-5">
          <Row className="justify-content-between">
            <Col md={5}>
              <h3 className="cambria-bold mb-3">Our Mission</h3>
              <p>
                To empower industries and communities by delivering
                high-quality, sustainable engineering solutions that inspire
                trust, growth, and long-term value.
              </p>
            </Col>
            <Col md={5}>
              <h3 className="cambria-bold mb-3">Our Vision</h3>
              <p>
                To empower industries and communities by delivering
                high-quality, sustainable engineering solutions that inspire
                trust, growth, and long-term value.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 cambria-bold">Our Values</h2>
          <div className="d-flex card-container">
            <Col className="box-shadow-light p-4 my-card">
              <div className="d-flex align-items-center mb-3 ">
                <Image src="about/values1.svg" className="me-2"/>
                <h5>Integrity</h5>
              </div>
              <p>
                We lead with honesty, transparency, and unwavering ethical
                standards.
              </p>
            </Col>
            <Col className="box-shadow-light p-4 my-card">
              <div className="d-flex align-items-center mb-3">
                <Image src="about/values2.svg" className="me-2"/>
                <h5>Innovation</h5>
              </div>
              <p>We solve real-world problems and shape a better future.</p>
            </Col>
            <Col className="box-shadow-light p-4 my-card">
              <div className="d-flex align-items-center mb-3">
                <Image src="about/values3.svg" className="me-2"/>
                <h5>Excellence</h5>
              </div>
              <p>
                From raw material to product—we ensure quality at every stage.
              </p>
            </Col>
            <Col className="box-shadow-light p-4 my-card">
              <div className="d-flex align-items-center mb-3">
                <Image src="about/values4.svg" className="me-2"/>
                <h5>People-Centered</h5>
              </div>
              <p>We invest in people, valuing relationships with respect.</p>
            </Col>
            <Col className="box-shadow-light p-4 my-card">
              <div className="d-flex align-items-center mb-3">
                <Image src="about/values5.svg" className="me-2"/>
                <h5>Sustainability</h5>
              </div>

              <p>We’re responsible—protecting our communities.</p>
            </Col>
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section className="padding-y-100 leadership position-relative">
        <Image src="about/bg-poly-right.svg" className="top-right-bg" />
        <Image src="about/bg-poly-left.svg" className="bottom-left-bg" />
        <Container>
          <h2 className="text-center mb-3 h3 cambria-bold">Leadership</h2>
          <span className="d-block text-center mb-5 fs-5">
            Meet the visionaries behind the momentum — and the reason we’re
            rising
          </span>
          <Row className="justify-content-center column-gap-5">
            <Col lg={4} md={5} sm={6} className="text-center">
              <div className="d-flex flex-column leader">
                <Image
                  fluid
                  src="about/leadership1.webp"
                  alt="Gopal Agarwal"
                  className=""
                />
                <div className="light-border py-2">
                  <h5>Gopal Agarwal</h5>
                  <p className="fs-6 text-secondary mt-1">Managing Director</p>
                  <Image
                    fluid
                    src="Contact/linkedin.svg"
                    alt="Gopal Agarwal"
                    className="my-2"
                  />
                </div>
              </div>
            </Col>
            <Col lg={4} md={5} sm={6} className="text-center">
              <div className="d-flex flex-column leader">
                <Image
                  fluid
                  src="about/leadership2.webp"
                  alt="Abhishek Agarwal"
                />
                <div className="light-border py-2">
                  <h5>Abhishek Agarwal</h5>
                  <p className="fs-6 text-secondary mt-1">CEO</p>
                  <Image
                    fluid
                    src="Contact/linkedin.svg"
                    alt="Gopal Agarwal"
                    className="my-2"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 cambria-bold h3">
            Awards & Recognition
          </h2>
          <Row className="gap-3 gap-md-0">
            <Col md={3} className="text-center">
              <Card className="border-0 p-4  align-items-center box-shadow-light h-100">
                <Card.Img
                  variant="top"
                  src="about/medal.svg"
                  className="w-50"
                />
                <Card.Body>
                  <Card.Text>Star Export Certified Company 2020</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="text-center">
              <Card className="border-0 p-4  align-items-center box-shadow-light h-100">
                <Card.Img
                  variant="top"
                  src="about/award.svg"
                  className="w-50"
                />
                <Card.Body>
                  <Card.Text>ISO 9001:2020 Certified</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="text-center">
              <Card className="border-0 p-4  align-items-center box-shadow-light h-100">
                <Card.Img variant="top" src="about/bars.svg" className="w-50" />
                <Card.Body>
                  <Card.Text>Best TMF for the Year 2019</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="text-center">
              <Card className="border-0 p-4  align-items-center box-shadow-light h-100">
                <Card.Img
                  variant="top"
                  src="about/employee.svg"
                  className="w-50"
                />
                <Card.Body>
                  <Card.Text>Award for Best Employee Retention</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Business Highlights Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 cambria-bold">
            Key Business Highlights
          </h2>
          <Row>
            <Col md={4}>
              <Card className="border-0 h-100">
                <Card.Img
                  className="rounded"
                  variant="top"
                  src="about/highlight2.png"
                  style={{ height: "500px", width: "auto" }}
                />
                <Card.Body className="flex-shrink-1 flex-grow-0">
                  <Card.Title>1,44,000+ Tons Annual Capacity</Card.Title>
                  <Card.Text>
                    Among South India’s top ERW steel pipe manufacturers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 h-100">
                <Card.Img
                  className="rounded"
                  variant="top"
                  src="about/highlight1.png"
                  style={{ height: "500px", width: "auto" }}
                />
                <Card.Body className="flex-shrink-1 flex-grow-0">
                  <Card.Title>Fully Integrated Plant</Card.Title>
                  <Card.Text>
                    From sponge iron to finished pipes—ensuring full control and
                    consistency.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img
                  className="rounded"
                  variant="top"
                  src="about/highlight3.png"
                  style={{ height: "500px", width: "auto" }}
                />
                <Card.Body className="flex-shrink-1">
                  <Card.Title>8 MW Clean Power Generator</Card.Title>
                  <Card.Text>
                    WHRB-based captive power driving sustainable operations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
