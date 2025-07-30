import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Banner from "~/common/Banner";
import HalfHalfSection from "~/common/HalfHalfSection";
import "./About.scss";
import Reveal from "~/common/Reveal";
import BlueBgContainer from "~/common/BlueBgContainer";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <Banner image="about/about-banner.webp">
        <div className="flex-50"></div>
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
              src="about/desc.webp"
              alt="Industrial Plant"
              fluid
              className="rounded shadow"
              style={{ minHeight: "600px", objectFit: "cover" }}
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
                  <Image src="about/stand1.svg" className="me-2" />
                  We don’t rely on coal.
                </li>
                <li className="mb-2 fs-5  d-flex align-items-center">
                  <Image src="about/stand2.svg" className="me-2" />
                  We don’t cut corners.
                </li>
                <li className="mb-2 fs-5 d-flex align-items-center">
                  <Image src="about/stand3.svg" className="me-2" />
                  We deliver cleaner, ethical production, and innovation with
                  heart.
                </li>
              </ul>
            </div>
          }
        />
        <Image src="bg-poly-4.png" className="bottom-right-bg" />
      </section>

      {/* Mission and Vision Section */}
      <section
      // className="banner-img padding-y-100"
      >
        <BlueBgContainer>
          <Container className="py-5">
            <Row className="justify-content-between">
              <Col md={6}>
                <Reveal config={{ fromLeft: true, delay: 0.2 }} className="h-100">
                  <div className="d-flex flex-column gap-3 bg-white p-3 rounded-3 h-100">
                    {/* Title Row */}
                    <div className="row align-items-center">
                      <div className="col-10 d-flex align-items-center gap-2">
                        <div
                          style={{ width: "4px", height: "32px" }}
                          className="bg-warning me-2"
                        ></div>
                        <h3 className="fs-4 fw-bold cambria-bold m-0">
                          {"Mission"}
                        </h3>
                      </div>
                      <div className="col-2 text-end">
                        <img
                          src={"/about/Mission.svg"}
                          alt="Icon"
                          className="img-fluid"
                          style={{ width: "60px", height: "60px" }}
                        />
                      </div>
                    </div>
                    {/* Description Row */}
                    <div className="row">
                      <div className="col-10">
                        <p className="fs-5 font-myraid m-0">
                          To Deliver Innovative, Durable, And Reliable Steel
                          Pipe Products That Meet The Evolving Needs Of Our
                          Customers And Industries. We Are Committed To
                          Excellence In Manufacturing, Environmental
                          Responsibility, And Fostering Long-term Relationships
                          With Our Clients, Partners, And Employees.
                        </p>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div>
                </Reveal>
              </Col>
              <Col md={6}>
                <Reveal config={{ fromRight: true, delay: 0.2 }} className="h-100">
                  {/* <h3 className="cambria-bold mb-3">Our Vision</h3> */}
                  <div className="d-flex flex-column gap-3 bg-white p-3 rounded-3 h-100">
                    {/* Title Row */}
                    <div className="row align-items-center">
                      <div className="col-10 d-flex align-items-center gap-2">
                        <div
                          style={{ width: "4px", height: "32px" }}
                          className="bg-warning me-2"
                        ></div>
                        <h3 className="fs-4 fw-bold cambria-bold m-0">{"Vision"}</h3>
                      </div>
                      <div className="col-2 text-end">
                        <img
                          src={"/about/Vision.svg"}
                          alt="Icon"
                          className="img-fluid"
                          style={{ width: "60px", height: "60px" }}
                        />
                      </div>
                    </div>
                    {/* Description Row */}
                    <div className="row">
                      <div className="col-10">
                        <p className="fs-5 font-myraid m-0">
                          At Maruti Ispat & Pipes Pvt. Ltd., We’re Committed To
                          Building A Stronger, Sustainable Future.through
                          Advanced Technology And Precision Engineering, We
                          Deliver High-quality Steel Solutions That Drive
                          Industrial Growth, Infrastructure Development, And
                          Environmental Responsibility.
                        </p>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div>
                </Reveal>
              </Col>
            </Row>
          </Container>
        </BlueBgContainer>
      </section>

      {/* Our Values Section */}
      <section className="padding-y-100">
        <Container>
          <h2 className="text-center mb-5 cambria-bold">Our Values</h2>
          <div className="d-flex card-container">
            <Reveal
              config={{ fromBottom: true, delay: 0.2 }}
              className="my-card"
            >
              <Col className="hover-effect box-shadow-light p-4 ">
                <div className="d-flex align-items-center mb-3 ">
                  <Image src="about/values1.svg" className="me-2" />
                  <h5>Integrity</h5>
                </div>
                <p>
                  We lead with honesty, transparency, and unwavering ethical
                  standards.
                </p>
              </Col>
            </Reveal>
            <Reveal
              config={{ fromBottom: true, delay: 0.4 }}
              className="my-card"
            >
              <Col className="hover-effect box-shadow-light p-4 ">
                <div className="d-flex align-items-center mb-3 ">
                  <Image src="about/values2.svg" className="me-2" />
                  <h5>Innovation</h5>
                </div>
                <p>We solve real-world problems and shape a better future.</p>
              </Col>
            </Reveal>
            <Reveal
              config={{ fromBottom: true, delay: 0.6 }}
              className="my-card"
            >
              <Col className="hover-effect box-shadow-light p-4 ">
                <div className="d-flex align-items-center mb-3">
                  <Image src="about/values3.svg" className="me-2" />
                  <h5>Excellence</h5>
                </div>
                <p>
                  From raw material to product—we ensure quality at every stage.
                </p>
              </Col>
            </Reveal>
            <Reveal
              config={{ fromBottom: true, delay: 0.8 }}
              className="my-card"
            >
              <Col className="hover-effect box-shadow-light p-4 ">
                <div className="d-flex align-items-center mb-3">
                  <Image src="about/values4.svg" className="me-2" />
                  <h5>People-Centered</h5>
                </div>
                <p>We invest in people, valuing relationships with respect.</p>
              </Col>
            </Reveal>
            <Reveal config={{ fromBottom: true, delay: 1 }} className="my-card">
              <Col className="hover-effect box-shadow-light p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <Image src="about/values5.svg" className="me-2" />
                  <h5>Sustainability</h5>
                </div>

                <p>We’re responsible—protecting our communities.</p>
              </Col>
            </Reveal>
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
              <Reveal config={{ fromLeft: true }}>
                <div className="d-flex flex-column leader rounded-4 hover-effect">
                  <Image
                    fluid
                    src="about/leadership1.webp"
                    alt="Gopal Agarwal"
                    className=""
                  />
                  <div className="light-border py-4">
                    <h5>Gopal Agarwal</h5>
                    <p className="fs-6 text-secondary mt-1 text-center">
                      Managing Director
                    </p>
                    {/* <a
                      href="https://www.linkedin.com/posts/maruti-ispat-pipes-private-limited_today-was-a-special-day-at-our-office-as-activity-7287415828575133696-spcB/"
                      target="__blank"
                    >
                      <Image
                        fluid
                        src="Contact/linkedin.svg"
                        alt="Gopal Agarwal"
                        className="my-2"
                      />
                    </a> */}
                  </div>
                </div>
              </Reveal>
            </Col>
            <Col lg={4} md={5} sm={6} className="text-center">
              <Reveal config={{ fromRight: true }}>
                <div className="d-flex flex-column leader  rounded-4 hover-effect">
                  <Image
                    fluid
                    src="about/leadership2.jpg"
                    alt="Abhishek Agarwal"
                  />
                  <div className="light-border py-4">
                    <h5>Abhishek Agarwal</h5>
                    <p className="fs-6 text-secondary mt-1 text-center">CEO</p>
                    {/* <a
                      href="https://www.linkedin.com/posts/maruti-ispat-pipes-private-limited_today-was-a-special-day-at-our-office-as-activity-7287415828575133696-spcB/"
                      target="__blank"
                    >
                      <Image
                        fluid
                        src="Contact/linkedin.svg"
                        alt="Gopal Agarwal"
                        className="my-2"
                      />
                    </a> */}
                  </div>
                </div>
              </Reveal>
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
              <Reveal
                config={{ fromBottom: true, delay: 0.2 }}
                className="h-100"
              >
                <Card className="border-0 p-4  align-items-center box-shadow-light h-100">
                  <Card.Img
                    variant="top"
                    src="about/medal.svg"
                    className="w-50"
                  />
                  <Card.Body>
                    <Card.Text className="text-center">
                      Star Export Certified Company 2020
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col md={3} className="text-center">
              <Reveal
                config={{ fromBottom: true, delay: 0.4 }}
                className="h-100"
              >
                <Card className="border-0 p-4  align-items-center box-shadow-light h-100">
                  <Card.Img
                    variant="top"
                    src="about/award.svg"
                    className="w-50"
                  />
                  <Card.Body>
                    <Card.Text className="text-center">
                      ISO 9001:2020 Certified
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col md={3} className="text-center">
              <Reveal
                config={{ fromBottom: true, delay: 0.6 }}
                className="h-100"
              >
                <Card className="border-0 p-4  align-items-center box-shadow-light h-100">
                  <Card.Img
                    variant="top"
                    src="about/bars.svg"
                    className="w-50"
                  />
                  <Card.Body>
                    <Card.Text className="text-center">
                      Best TMF for the Year 2019
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col md={3} className="text-center">
              <Reveal
                config={{ fromBottom: true, delay: 0.8 }}
                className="h-100"
              >
                <Card className="border-0 p-4  align-items-center box-shadow-light h-100">
                  <Card.Img
                    variant="top"
                    src="about/employee.svg"
                    className="w-50"
                  />
                  <Card.Body>
                    <Card.Text className="text-center">
                      Award for Best Employee Retention
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Reveal>
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
              <Reveal config={{ fromLeft: true, delay: 0.2 }}>
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
              </Reveal>
            </Col>
            <Col md={4}>
              <Reveal config={{ fromBottom: true, delay: 0.2 }}>
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
                      From sponge iron to finished pipes—ensuring full control
                      and consistency.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col md={4}>
              <Reveal config={{ fromRight: true, delay: 0.2 }}>
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
              </Reveal>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
