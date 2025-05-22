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
import "./style.scss";
import { ArrowRight } from "react-bootstrap-icons";

const Sustainability = () => {
  return (
    <div className="sustainability-page">
      {/* Hero Section */}
      <Banner image="Sustainability/banner.webp">
        <div className="" style={{ flexBasis: "45%" }}></div>
        <div
          className=""
          style={{ flexBasis: "50%", width: "50%", maxWidth: "400px" }}
        >
          <div className="">
            <h1 className="fs-2 fst-italic">
              Growing Responsibly, Building Sustainably
            </h1>
            <p className="lead mt-3">
              At GP Agarwal Group, sustainability isn’t just a promise; it’s how
              we power progress—balancing industry, environment, and community
              to thrive together.
            </p>
          </div>
        </div>
      </Banner>

      {/* Commitment Section */}
      <section className="padding-y-100 lightgreen-bg">
        <HalfHalfSection
          leftContent={
            <Image
              src="Sustainability/commitment.png"
              alt="Hands with Plant"
              fluid
              className="shadow border-rounded"
            />
          }
          rightContent={
            <div className="d-flex flex-column gap-3">
              <h2 className="text-green h3 m-0">
                Our Commitment to Sustainability
              </h2>
              <p>
                At GP Agarwal Group, we don’t just see sustainability as a
                goal—it’s an opportunity to redefine the future.
              </p>
              <p>
                We are building industries that respect the Earth’s resources,
                power clean cities, and nurture thriving communities. Through
                clean energy initiatives, efficient steel manufacturing, and
                community partnerships, we are innovating today for a
                sustainable tomorrow—where every investment moves the planet,
                and every forward step leaves a positive legacy for generations
                to come.
              </p>
              <p className="text-white green-bg p-3 rounded commitment">
                <strong>Our vision is clear:</strong> To create an India where
                every innovation fuels resilience, every investment strengthens
                the planet, and every step forward leaves a positive legacy for
                generations to come.
              </p>
            </div>
          }
        />
      </section>

      {/* Three Sustainability Pillars Section */}
      <section className="pillars lightgreen-bg position-relative">
        <Container>
          <h2 className="text-center mb-5 text-green">
            Three Sustainability Pillars
          </h2>
          <Row className="justify-content-around align-items-stretch">
            <Col className="flex-30">
              <Card className="border-0 text-center px-2 pt-5 box-shadow-light h-100">
                <Card.Img
                  variant="top"
                  src="Sustainability/pillar1.png"
                  alt="Clean Manufacturing"
                  className="rounded-circle mx-auto mb-4"
                  style={{ width: "150px", height: "150px" }}
                />
                <Card.Body>
                  <Card.Title className="text-green">
                    Clean Manufacturing
                  </Card.Title>
                  <Card.Text>
                    <ul className="text-start">
                      <li>8 MW Energy from Waste Heat</li>
                      <li>Minimum Carbon Footprint</li>
                      <li>Product Efficiency</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 text-center px-2 pt-5 box-shadow-light h-100">
                <Card.Img
                  variant="top"
                  src="Sustainability/pillar2.png"
                  alt="Community Development"
                  className="rounded-circle mx-auto mb-4"
                  style={{ width: "150px", height: "150px" }}
                />
                <Card.Body>
                  <Card.Title className="text-green">
                    Community Development
                  </Card.Title>
                  <Card.Text>
                    <ul className="text-start">
                      <li>Daily Meals for Need</li>
                      <li>Education for All</li>
                      <li>Healthcare and Assistance</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 text-center px-2 pt-5 box-shadow-light h-100">
                <Card.Img
                  variant="top"
                  src="Sustainability/pillar3.png"
                  alt="Environmental Responsibility"
                  className="rounded-circle mx-auto mb-4"
                  style={{ width: "150px", height: "150px" }}
                />
                <Card.Body>
                  <Card.Title className="text-green">
                    Environmental Responsibility
                  </Card.Title>
                  <Card.Text>
                    <ul className="text-start">
                      <li>Water Reuse Conservation</li>
                      <li>Solar Energy and Green Innovation</li>
                      <li>Reforestation Efforts</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Image
          src="Sustainability/poly-bg-right.svg"
          className="bottom-right-bg"
        />
      </section>

      {/* CSR and ESG Section */}
      <section className="">
        <Container fluid className="">
          <Row className="text-white flex-nowrap" style={{ gap: "5px" }}>
            <Col
              md={6}
              className="banner-img py-2 d-flex flex-column justify-content-around flex-shrink-1"
              style={{
                backgroundImage: "url('/Sustainability/csr.webp')",
                minHeight: "400px",
              }}
            >
              <div className="d-flex flex-column align-items-center">
                <Image
                  src="Sustainability/csr.svg"
                  alt="CSR"
                  fluid
                  className="rounded shadow"
                />
                <hr className="border border-white border-2 opacity-100 w-25"></hr>
                <span className="text-center h4">Our CSR </span>
              </div>
              <a
                href="#explore"
                className="text-white link-underline link-underline-opacity-0 border border-white align-self-center px-3 rounded py-1"
              >
                Explore
                <ArrowRight className="ms-5" />
              </a>
            </Col>
            <Col
              md={6}
              className="banner-img py-2 d-flex flex-column justify-content-around"
              style={{ backgroundImage: "url('/Sustainability/esg.webp')" }}
            >
              <div className="d-flex flex-column align-items-center">
                <Image
                  src="Sustainability/esg.svg"
                  alt="ESG"
                  fluid
                  className="rounded shadow"
                />
                <hr className="border border-white border-2 opacity-100 w-25"></hr>
                <span className="text-center h4">Our ESG </span>
              </div>

              <a
                href="#explore"
                className="text-white link-underline link-underline-opacity-0 border border-white align-self-center px-3 rounded py-1"
              >
                Explore
                <ArrowRight className="ms-5" />
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Greener Tomorrow Section */}
      <section className="padding-y-100 lightgreen-bg">
        <Container>
          <Row className="mb-5">
            <Col md={6} className="pe-5">
              <h2 className="text-green h4 text-uppercase">
                Forging a Greener Tomorrow
              </h2>
              <h3 className="h4">
                Our roadmap for building a sustainable, responsible future.
              </h3>
              <p>
                At GP Agarwal Group, we are committed to creating a future we
                are investing in long-term solutions that protect our
                environment, generations to come, and build resilience for the
                future.
              </p>
            </Col>
            <Col md={6}>
              <Image
                src="Sustainability/garden.png"
                alt="Greener Tomorrow"
                fluid
                className="shadow border-rounded"
              />
            </Col>
          </Row>
          {/* Cards */}
          <Row className="card-container justify-content-between">
            <Col className="flex-24">
              <Card className="border-0 p-4 box-shadow-light h-100">
                <Card.Body className="p-0">
                  <Card.Img
                    variant="top"
                    src="Sustainability/roadmap1.svg"
                    alt="Clean Manufacturing"
                    className="rounded-circle mb-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <Card.Title>Expand Clean Energy</Card.Title>
                  <Card.Text>
                    Transition more operations to renewable energy sources.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-24">
              <Card className="border-0 p-4 box-shadow-light h-100">
                <Card.Img
                  variant="top"
                  src="Sustainability/roadmap2.svg"
                  alt="Clean Manufacturing"
                  className="rounded-circle mb-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <Card.Body className="p-0">
                  <Card.Title>Achieve Net-Zero by 2030</Card.Title>
                  <Card.Text>
                    Reduce emissions through greener practices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-24">
              <Card className="border-0 p-4 box-shadow-light h-100">
                <Card.Img
                  variant="top"
                  src="Sustainability/roadmap3.svg"
                  alt="Clean Manufacturing"
                  className="rounded-circle mb-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <Card.Body className="p-0">
                  <Card.Title>Strengthen Community Development</Card.Title>
                  <Card.Text>
                    Enhance education and livelihood programs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-24">
              <Card className="border-0 p-4 box-shadow-light h-100">
                <Card.Img
                  variant="top"
                  src="Sustainability/roadmap4.svg"
                  alt="Clean Manufacturing"
                  className="rounded-circle mb-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <Card.Body className="p-0">
                  <Card.Title>Adopt Circular Economy Principles</Card.Title>
                  <Card.Text>Reduce waste in all operations.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sustainability Highlights Section */}
      <section className="py-5 lightgreen-bg highlight">
        <Container>
          <h2 className="h4 text-uppercase text-green">
            Sustainability Highlights of FY 2023-24
          </h2>
          <p className="w-75 fs-5">
            We drive environmental responsibility by integrating sustainable
            practices across our operations. Our initiatives focus on clean
            manufacturing, renewable energy adoption, resource conservation and
            promoting circular economy for a better tomorrow.
          </p>
          <Row className="mt-4 align-items-end">
            <Col md={3}>
              <h4 className="h6 text">
                Material <br /> Management
              </h4>
              <h3 className="text-green fw-bold">32%</h3>
              <p className="fs-7">Recycled eco-friendly material used</p>
            </Col>
            <Col md={3}>
              <h4 className="h6">
                Renewable <br /> Resource
              </h4>
              <h3 className="text-green fw-bold">0.16 Mn GJ</h3>
              <p className="fs-7">Renewable energy used</p>
            </Col>
            <Col md={3}>
              <h3 className="text-green fw-bold">9.2%</h3>
              <p className="fs-7">of total electricity consumption</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={3}>
              <h4 className="h6">
                Green <br /> Business
              </h4>
              <h3 className="text-green fw-bold">50%</h3>
              <p className="fs-7">Of revenue</p>
            </Col>
            <Col md={3}>
              <h4 className="h6">
                Energy <br /> Efficiency
              </h4>

              <h3 className="text-green fw-bold">16%</h3>
              <p className="fs-7">Reduction in energy intensity FY</p>
            </Col>
          </Row>
          <Row className="align-items-end">
            <Col md={3}>
              <h4 className="h6">
                Protecting <br /> Nature
              </h4>
              <h3 className="text-green fw-bold">~4M</h3>
              <p className="fs-7">Saplings planted across the region</p>
            </Col>
            <Col md={3}>
              <h3 className="text-green fw-bold">&gt;50%</h3>
              <p className="fs-7">Water reused</p>
            </Col>
          </Row>
          <h2 className="text-green w-50 text-center mt-5 ms-5">
            "Sustainability is not a choice — it’s the future we build today."
          </h2>
        </Container>
        <Image src="Sustainability/tree.png" className="bottom-right-bg" />
      </section>

      {/* Final Section */}
      <section
        className="py-5 text-center banner-img h-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url(Sustainability/contact.webp)",
          minHeight: "800px",
        }}
      >
        <Container className="align-items-center d-flex flex-column justify-content-center h-100">
          <h3 className="text-white h1 w-75">
            Together, we can build a future that is strong, sustainable, and
            full of opportunity.
          </h3>
          <Button
            variant="light"
            href="#contact-us"
            className="mt-3 text-green fw-bold px-5 fs-5"
          >
            Contact Us
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Sustainability;
