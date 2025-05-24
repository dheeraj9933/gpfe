import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Image,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Banner from "~/common/Banner";
import HalfHalfSection from "~/common/HalfHalfSection";
import SliderIcons from "~/common/SliderIcons";

const Careers = () => {
  return (
    <div>
      <Banner image="Career/banner.webp">
        <div className="" style={{ flexBasis: "50%" }}></div>
        <div
          className=""
          style={{ flexBasis: "50%", width: "45%", maxWidth: "400px" }}
        >
          <div className="">
            <h1 className="fs-2 fst-italic mb-2">
              Build Your Future with GP Agarwal Group
            </h1>
            <p>
              Join a legacy of excellence, innovation, and integrity. At GP
              Agarwal Group, we don’t just offer jobs — we offer long-term
              careers that shape industries and communities.
            </p>
          </div>
        </div>
      </Banner>

      {/* Work Culture Section */}
      <section className="padding-y-100 bg-light">
        <HalfHalfSection
          leftContent={
            <Image
              src="Career/culture.png"
              alt="Work Culture"
              fluid
              className="shadow border-rounded"
            />
          }
          rightContent={
            <div className="d-flex flex-column gap-3">
              <h2 className="h4 text-uppercase m-0">Our Work Culture</h2>
              <h3 className="h4 text-blue m-0" style={{ maxWidth: "250px" }}>
                A Culture of Growth and Purpose
              </h3>
              <p style={{ maxWidth: "500px" }}>
                We believe people are our most valuable asset. Whether in the
                steel plants, power facilities, or corporate offices, we foster
                a culture of respect, collaboration, and opportunity. We’re
                proud to empower our team to learn, lead, and grow — because
                when our people grow, our business grows.
              </p>
            </div>
          }
        />
      </section>

      {/* Value Proposition Section */}
      <section className="padding-y-100 bg-light-blue ">
        <Container>
          <div className="card-container justify-content-between grid-container-3">
            <Col className="flex-30 d-flex ">
              <div className="d-flex flex-column justify-content-center h-100 w-75">
                <h3 className="h4 text-uppercase">Why Work With Us?</h3>
                <h4 className="h3 text-blue">Our Employee Value Proposition</h4>
              </div>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 p-4 h-100 border-rounded">
                <Card.Body className="p-0">
                  <Card.Img
                    variant="top"
                    src="Career/work1.svg"
                    alt="Clean Manufacturing"
                    className="rounded-circle mb-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <Card.Title>Values-Driven</Card.Title>
                  <Card.Text>
                    We uphold integrity, purpose, and empathy in our decisions,
                    projects, and partnerships—shaping who we are and how we
                    operate.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 p-4 h-100 border-rounded">
                <Card.Img
                  variant="top"
                  src="Career/work2.svg"
                  alt="Clean Manufacturing"
                  className="rounded-circle mb-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <Card.Body className="p-0">
                  <Card.Title>Strong Legacy</Card.Title>
                  <Card.Text>
                    With decades of industrial expertise, we offer a record of
                    success. When you join us, you become part of a legacy of
                    industry leadership.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 p-4 border-rounded h-100">
                <Card.Img
                  variant="top"
                  src="Career/work3.svg"
                  alt="Clean Manufacturing"
                  className="rounded-circle mb-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <Card.Body className="p-0">
                  <Card.Title>Career Growth</Card.Title>
                  <Card.Text>
                    Whether you’re just starting out or a seasoned professional,
                    we provide ample opportunities for learning, promoting
                    within, and recognizing potential at every level.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 p-4 border-rounded h-100">
                <Card.Img
                  variant="top"
                  src="Career/work4.svg"
                  alt="Clean Manufacturing"
                  className="rounded-circle mb-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <Card.Body className="p-0">
                  <Card.Title>Inclusive Environment</Card.Title>
                  <Card.Text>
                    {" "}
                    Our employees are at the heart of our organization. We are
                    inclusive, empathetic, and value every voice to be heard and
                    valued.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 p-4 border-rounded h-100">
                <Card.Img
                  variant="top"
                  src="Career/work5.svg"
                  alt="Clean Manufacturing"
                  className="rounded-circle mb-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <Card.Body className="p-0">
                  <Card.Title>Stability & Scale</Card.Title>
                  <Card.Text>
                    {" "}
                    Be part of one of India’s leading integrated steel
                    manufacturers—GP Agarwal Group is building impact across
                    industries.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </Container>
      </section>

      {/* Current Openings Section */}
      <section className="py-5 bg-muted-blue text-white">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="text-uppercase h5">Current Openings</h2>
              <h3 className="h4">At GP Agarwal Group</h3>
            </Col>
            <Col>
              <div>
                <SliderIcons />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card className="bg-transparent text-white border-0 border-2 border-start rounded-0">
                <Card.Body className="py-0">
                  <Card.Title>Mechanical Engineer – Steel Division</Card.Title>
                  <Card.Text>Mart. Kolta</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="bg-transparent text-white border-0 border-2 border-start rounded-0">
                <Card.Body className="py-0">
                  <Card.Title>
                    Sustainability Officer – Corporate Office
                  </Card.Title>
                  <Card.Text>Mart. Kolta</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <Card className="bg-transparent text-white border-0 border-2 border-start rounded-0">
                <Card.Body className="py-0">
                  <Card.Title>
                    Business Analyst – Strategy & Development Group
                  </Card.Title>
                  <Card.Text>Hyderabad</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="bg-transparent text-white border-0 border-2 border-start rounded-0">
                <Card.Body className="py-0">
                  <Card.Title>Manager – Global Sales Division</Card.Title>
                  <Card.Text>Hyderabad</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <Card className="bg-transparent text-white border-0 border-2 border-start rounded-0">
                <Card.Body className="py-0">
                  <Card.Title>HR Executive – Plant Operations</Card.Title>
                  <Card.Text>Hyderabad</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="bg-transparent text-white border-0 border-2 border-start rounded-0">
                <Card.Body className="py-0">
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
                    “The company has supported my growth with a trainee to team
                    lead – the learning opportunities here are unmatched.”
                  </Card.Text>
                  <Card.Text>
                    <strong>Rahul Varma</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/400/300"
                  alt="Health & Wellness"
                />
                <Card.Body>
                  <Card.Title>Health & Wellness Program</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/400/300"
                  alt="Monthly R&R"
                />
                <Card.Body>
                  <Card.Title>Monthly R&R Program</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/400/300"
                  alt="Diwali Celebrations"
                />
                <Card.Body>
                  <Card.Title>Diwali Celebrations</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/400/300"
                  alt="Annual Day"
                />
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
          <h2 className="text-center mb-5">
            Reach Us – Submit Your Application
          </h2>
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
                    <option>
                      Business Analyst – Strategy & Development Group
                    </option>
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
                    <Button variant="primary" className="mt-4">
                      Upload Resume
                    </Button>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="coverLetter">
                  <Form.Label>Message / Cover Letter</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your cover letter here"
                  />
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
      <section
        className="py-5 text-center"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/1200/600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <h2 className="text-white">Let’s Grow Together</h2>
          <h3 className="text-white">
            Whether you’re just starting out or looking to take your career to
            the next level, GP Agarwal Group offers the platform, mentoring, and
            vision to thrive. Step into the future with us.
          </h3>
          <Button variant="light" href="#careers" className="mt-3">
            Get Started
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Careers;
