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
  InputGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { ArrowRight, ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Banner from "~/common/Banner";
import HalfHalfSection from "~/common/HalfHalfSection";
import ImageWithText from "~/common/ImageWithText";
import SliderIcons from "~/common/SliderIcons";
import "./styles.scss"; // Assuming you have a CSS file for styles
import Reveal from "~/common/Reveal";

const Careers = () => {
  return (
    <div className="career-page">
      <Banner image="Career/banner.webp">
        <div className="flex-50"></div>
        <div className="flex-50 banner-inner-text">
          <div className="">
            <h1 className="fs-2 cambria-bold-it mb-2">
              Build Your Future with GP Agarwal Group
            </h1>
            <p className="fs-5">
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
              <h2 className="mt-2 h4 text-uppercase m-0 helvetica-neue-reg">
                Our Work Culture
              </h2>
              <h3
                className="h3 text-blue m-0 cambria-bold"
                style={{ maxWidth: "350px" }}
              >
                A Culture of Growth and Purpose
              </h3>
              <p className="fs-5" style={{ maxWidth: "500px" }}>
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
                <h3 className="h4 text-uppercase helvetica-neue-reg">
                  Why Work With Us?
                </h3>
                <h4 className="h3 text-blue cambria-bold">
                  Our Employee Value Proposition
                </h4>
              </div>
            </Col>
            <Col className="flex-30">
              <Reveal config={{ fromRight: true }} className="h-100">
                <Card className="border-0 p-4 h-100 border-rounded">
                  <Card.Body className="p-0">
                    <div className="d-flex align-items-center">
                      <Card.Img
                        variant="top"
                        src="Career/work1.svg"
                        alt="Clean Manufacturing"
                        className="rounded-circle mb-2"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Card.Title className="text-blue ms-3">
                        Strong Legacy
                      </Card.Title>
                    </div>
                    <Card.Text className="">
                      With decades of industrial expertise, we bring stability,
                      trust, and a proven track record of success. When you join
                      us, you’re joining a brand built on a strong foundation of
                      integrity and industry leadership.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col className="flex-30">
              <Reveal config={{ fromRight: true }} className="h-100">
                <Card className="border-0 p-4 h-100 border-rounded">
                  <Card.Body className="p-0">
                    <div className="d-flex align-items-center">
                      <Card.Img
                        variant="top"
                        src="Career/work2.svg"
                        alt="Clean Manufacturing"
                        className="rounded-circle mb-2"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Card.Title className="text-blue ms-3">
                        Career Growth
                      </Card.Title>
                    </div>
                    <Card.Text>
                      Whether you’re just starting out or looking to take the
                      next big step, we provide ample opportunities for learning
                      and career advancement. We believe in promoting from
                      within and recognizing potential at every level.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col className="flex-30">
              <Reveal config={{ fromLeft: true }} className="h-100">
                <Card className="border-0 p-4 border-rounded h-100">
                  <Card.Body className="p-0">
                    <div className="d-flex align-items-center">
                      <Card.Img
                        variant="top"
                        src="Career/work3.svg"
                        alt="Clean Manufacturing"
                        className="rounded-circle mb-2"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Card.Title className="text-blue ms-3">
                        Values-Driven
                      </Card.Title>
                    </div>
                    <Card.Text>
                      We uphold integrity, pursue sustainability, and strive for
                      excellence in every decision, process, and
                      partnership—defining who we are and how we operate
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col className="flex-30">
              <Reveal config={{ fromLeft: true }} className="h-100">
                <Card className="border-0 p-4 border-rounded h-100">
                  <Card.Body className="p-0">
                    <div className="d-flex align-items-center">
                      <Card.Img
                        variant="top"
                        src="Career/work4.svg"
                        alt="Clean Manufacturing"
                        className="rounded-circle mb-2"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Card.Title className="text-blue ms-3">
                        Inclusive Environment
                      </Card.Title>
                    </div>
                    <Card.Text>
                      {" "}
                      Our employees are at the heart of our organization. We are
                      inclusive, empathetic, and value every voice to be heard
                      and valued.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col className="flex-30">
              <Reveal config={{ fromLeft: true }} className="h-100">
                <Card className="border-0 p-4 border-rounded h-100">
                  <Card.Body className="p-0">
                    <div className="d-flex align-items-center">
                      <Card.Img
                        variant="top"
                        src="Career/work5.svg"
                        alt="Clean Manufacturing"
                        className="rounded-circle mb-2"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Card.Title className="text-blue ms-3">
                        Stability & Scale
                      </Card.Title>
                    </div>
                    <Card.Text>
                      {" "}
                      Be part of one of India’s leading integrated steel
                      manufacturers—GP Agarwal Group is building impact across
                      industries.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
          </div>
        </Container>
      </section>

      {/* Current Openings Section */}
      <section className="padding-y-100 bg-muted-blue text-white">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="text-uppercase h5 helvetica-neue-reg">
                Current Openings
              </h2>
              <h3 className="h4 cambria-bold">At GP Agarwal Group</h3>
            </Col>
            <Col className="d-flex justify-content-end px-5">
              <div>
                <SliderIcons />
              </div>
            </Col>
          </Row>
          <div className="grid-container-2">
            <Reveal config={{ fromLeft: true }}>
              <Card className="bg-transparent text-white border-0 border-2 border-start rounded-0">
                <Card.Body className="py-0">
                  <Card.Title>Mechanical Engineer – Steel Division</Card.Title>
                  <Card.Text>Mart. Kolta</Card.Text>
                </Card.Body>
              </Card>
            </Reveal>
            <Reveal config={{ fromRight: true }}>
              <Card className="bg-transparent text-white border-0 border-2 border-start rounded-0">
                <Card.Body className="py-0">
                  <Card.Title>
                    Sustainability Officer – Corporate Office
                  </Card.Title>
                  <Card.Text>Mart. Kolta</Card.Text>
                </Card.Body>
              </Card>
            </Reveal>
            <Reveal config={{ fromLeft: true }}>
              <Card className="bg-transparent text-white border-0 border-2 border-start rounded-0">
                <Card.Body className="py-0">
                  <Card.Title>
                    Business Analyst – Strategy & Development Group
                  </Card.Title>
                  <Card.Text>Hyderabad</Card.Text>
                </Card.Body>
              </Card>
            </Reveal>
            <Reveal config={{ fromRight: true }}>
              <Card className="bg-transparent text-white border-0 border-2 border-start rounded-0">
                <Card.Body className="py-0">
                  <Card.Title>Manager – Global Sales Division</Card.Title>
                  <Card.Text>Hyderabad</Card.Text>
                </Card.Body>
              </Card>
            </Reveal>
            <Reveal config={{ fromLeft: true }}>
              <Card className="bg-transparent text-white border-0 border-2 border-start rounded-0">
                <Card.Body className="py-0">
                  <Card.Title>HR Executive – Plant Operations</Card.Title>
                  <Card.Text>Hyderabad</Card.Text>
                </Card.Body>
              </Card>
            </Reveal>
            <Reveal config={{ fromRight: true }}>
              <Card className="bg-transparent text-white border-0 border-2 border-start rounded-0">
                <Card.Body className="py-0">
                  <Card.Title>Financial Analyst, GP Agarwal Group</Card.Title>
                  <Card.Text>Hyderabad</Card.Text>
                </Card.Body>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Life at GP Agarwal Section */}
      <section className="padding-y-100">
        <Container>
          <h2 className="text-center mb-5 cambria-bold">
            Life at GP Agarwal Group
          </h2>
          <div className="custom-grid">
            <div className="grid-item-6 bg-muted-blue rounded-4 p-3 ">
              <Reveal config={{ popIn: true }}>
                <Card className="border-0 bg-transparent text-white">
                  <Card.Body className="p-0">
                    <Card.Text className="h5">
                      “The company has supported my growth with a trainee to
                      team lead – the learning opportunities here are
                      unmatched.”
                    </Card.Text>
                    <Card.Text className="mt-5">
                      <strong className="h5">Rahul Varma</strong>
                      <br />
                      <span className="">Senior Engineer</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Reveal>
              <div className="d-flex justify-content-end mt-auto">
                <SliderIcons />
              </div>
            </div>
            <Reveal config={{ popIn: true }} className="grid-item-4">
              <ImageWithText
                src="Career/collage2.png"
                alt="Collage 1"
                text="Health & Wellness Program"
              />
            </Reveal>
            <Reveal config={{ popIn: true }} className="grid-item-4">
              <ImageWithText
                src="Career/collage2.png"
                alt="Collage 1"
                text="Monthly R&R Program"
                className=""
              />
            </Reveal>
            <Reveal config={{ popIn: true }} className="grid-item-7">
              <ImageWithText
                src="Career/collage3.png"
                alt="Collage 1"
                text="Diwali Celebrations"
              />
            </Reveal>
            <Reveal config={{ popIn: true }} className="grid-item-7">
              <ImageWithText
                src="Career/collage4.png"
                alt="Collage 1"
                text="Annual Day"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Application Form Section */}
      <section className="padding-y-100 bg-light-blue">
        <Reveal config={{ fromBottom: true }} className="">
          <Container className="bg-white max-width-75 rounded-4">
            <h2 className="text-center mb-2 h4 text-uppercase text-blue">
              Reach to Us
            </h2>
            <h3 className="text-center cambria-bold">
              Submit Your Application
            </h3>
            <Row className="justify-content-center ">
              <Col>
                <Form>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label className="fw-semi-bold">Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      className="light-form-bg"
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      {" "}
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="fw-semi-bold">
                          Email Address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          className="light-form-bg"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      {" "}
                      <Form.Label className="fw-semi-bold">
                        Phone Number
                      </Form.Label>
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
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="role">
                        <Form.Label className="fw-semi-bold">Role</Form.Label>
                        <Form.Control as="select" className="light-form-bg">
                          <option>Select Role</option>
                          <option>Mechanical Engineer – Steel Division</option>
                          <option>
                            Sustainability Officer – Corporate Office
                          </option>
                          <option>
                            Business Analyst – Strategy & Development Group
                          </option>
                          <option>Manager – Global Sales Division</option>
                          <option>HR Executive – Plant Operations</option>
                          <option>Financial Analyst, GP Agarwal Group</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="resume">
                        <Form.Label className="fw-semi-bold">Resume</Form.Label>
                        <Form.Control type="file" className="light-form-bg" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="coverLetter">
                    <Form.Label className="fw-semi-bold">
                      Message / Cover Letter
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your cover letter here"
                      className="light-form-bg"
                    />
                  </Form.Group>
                  <div className="d-grid">
                    <Button
                      variant=""
                      type="submit"
                      className="bg-muted-blue text-white fw-semi-bold"
                    >
                      Submit Form <ArrowRight className="fs-5" />
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </Reveal>
      </section>

      {/* Call to Action Section */}

      <Banner image="Career/grow.webp">
        <Reveal config={{ fromRight: true }} className="h-100">
          <div
            className="d-flex align-items-center"
            style={{ maxWidth: "400px", height: "100%" }}
          >
            <div className="">
              <h1 className="fs-2 cambria-bold">Let’s Grow Together</h1>
              <p className="lead mt-3">
                Whether you’re just starting out or looking to take your career
                to the next level, GP Agarwal Group offers the platform,
                mentoring, and vision to thrive. Step into the future with us.
              </p>
              <Button
                variant="light"
                href="#contact-us"
                className="mt-3 text-green fw-bold px-5 fs-5"
              >
                Get Started
              </Button>
            </div>
          </div>
        </Reveal>
      </Banner>
    </div>
  );
};

export default Careers;
