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
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "~/common/Banner";
import HalfHalfSection from "~/common/HalfHalfSection";
import "./styles.scss"; // Import your CSS file for custom styles
import ImageWithText from "~/common/ImageWithText";
import News from "~/common/News";
import SliderIcons from "~/common/SliderIcons";

const SteelBusiness = () => {
  return (
    <div className="power-page">
      {/* Hero Section */}
      <Banner image="Power/banner.webp">
        <div className="" style={{ flexBasis: "50%" }}></div>
        <div
          className=""
          style={{ flexBasis: "50%", width: "45%", maxWidth: "400px" }}
        >
          <div className="">
            <h1 className="fs-2 cambria-bold-it mb-2">
              Power – Energizing Growth Sustainably
            </h1>
            <p className="fs-5">Clean Energy That Fuels Industry</p>
          </div>
        </div>
      </Banner>

      {/* Steel Ecosystem Section */}
      <section className="position-relative ecosystem">
        <HalfHalfSection
          leftContent={
            <Image
              src="Power/ecosystem.png"
              alt="Hands with Plant"
              fluid
              className="shadow border-rounded"
            />
          }
          rightContent={
            <div className="d-flex flex-column gap-3">
              <h2 className="helvetica-neue-reg">The Clean Energy Ecosystem</h2>
              <p className="fs-5">
                At GP Agarwal Group, power is more than a utility — it’s a
                strategic asset that drives our efficiency, self-reliance, and
                long-term sustainability. Our in-house power division is built
                around a clean energy model that reduces emissions and optimizes
                performance across our steel and manufacturing operations.
              </p>
              <p className="fs-5">
                Through our 8 MW Waste Heat Recovery Boiler (WHRB) plant, we
                convert industrial waste heat into usable power — making our
                steel production greener, leaner, and more cost-efficient.
              </p>
            </div>
          }
        />
        <Image src="Steel/poly-bg-mid.svg" className="mid-left-bg" />
      </section>

      {/* Key Infrastructure Section 5 3 3 */}
      <section className=" ">
        <Container
          fluid
          className="py-5 banner-img"
          style={{ backgroundImage: "url('Steel/infra-bg.png')" }}
        >
          <Container
            className="my-5 py-5 px-0 bg-white infra-internal"
            style={{ width: "85%" }}
          >
            <h2 className="text-center mb-5 h2 cambria-bold">
              Key Infrastructure
            </h2>
            <div className="flex-container no-gap">
              <Col className="flex-30 border-end ">
                <Card className="border-0 text-center p-4 ">
                  <Card.Img
                    variant="top"
                    src="Steel/infra1.svg"
                    alt="300 TPD Sponge Iron Kilns"
                    className="my-icon mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">300 TPD</Card.Title>
                    <Card.Text className="fw-bold">Sponge Iron Kilns</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="flex-30 border-end ">
                <Card className="border-0 text-center p-4 ">
                  <Card.Img
                    variant="top"
                    src="Steel/infra2.svg"
                    alt="300 TPD Sponge Iron Kilns"
                    className="my-icon mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">Concast AG</Card.Title>
                    <Card.Text className="fw-bold">
                      Steel Melting Induction
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="flex-30">
                <Card className="border-0 text-center p-4 ">
                  <Card.Img
                    variant="top"
                    src="Steel/infra3.svg"
                    alt="300 TPD Sponge Iron Kilns"
                    className="my-icon mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">1.7 MTPA</Card.Title>
                    <Card.Text className="fw-bold">Hot Strip Mill</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </Container>
        </Container>
      </section>

      {/* Sustainability Highlights Section */}
      <section className="lightgreen-bg highlight">
        <Container>
          <h2 className="h4 text-uppercase text-green helvetica-neue-reg">
            Applications & Impact
          </h2>
          <p className="w-75 fs-5">
            Our integrated energy systems are designed not just to power
            operations, but to create measurable impact across the value chain.
            From meeting the energy needs of core steel and casting facilities
            to reducing carbon dependency, every initiative contributes to
            long-term efficiency and sustainability. These efforts also lay the
            groundwork for future-ready, multi-vertical clean energy ecosystems
            that support innovation, resilience, and responsible growth.
          </p>
          <Row className="mt-4 align-items-end">
            <Col md={3}>
              <h4 className="text-green fw-bold mb-3 helvetica-neue-reg">
                Integrated Power
              </h4>
              <p className="fs-6">Recycled eco-friendly material used</p>
            </Col>
            <Col md={3}>
              <h4 className="text-green fw-bold mb-3 helvetica-neue-reg">
                Unit-Wide Supply
              </h4>
              <p className="fs-6">Renewable energy used</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={3}>
              <h4 className="text-green fw-bold mb-3 helvetica-neue-reg">
                Grid Independence
              </h4>
              <p className="fs-6">Of revenue</p>
            </Col>
            <Col md={3}>
              <h4 className="text-green fw-bold mb-3 helvetica-neue-reg">
                Scalable Energy
              </h4>
              <p className="fs-6">Reduction in energy intensity FY</p>
            </Col>
          </Row>
        </Container>
        <Image src="Power/impact.png" className="bottom-right-bg" />
      </section>

      {/* Roadmap Section */}
      <section className="padding-y-100 text-white green-bg position-relative">
        <Image
          src="Steel/tree.svg"
          className="top-right-bg"
          alt="Roadmap Background"
        />
        <HalfHalfSection
          leftContent={
            <div className="d-flex justify-content-end w-100 pe-5">
              <Image
                src="Power/roadmap.png"
                alt="Roadmap"
                fluid
                className="rounded"
              />
            </div>
          }
          rightContent={
            <div className="d-flex flex-column gap-3">
              <h2 className="h3 cambria-bold">Sustainability in Every Unit</h2>
              <p className="fs-5 my-4">
                Our power plant aligns with our group-wide sustainability
                vision. By repurposing thermal waste into electricity, we not
                only reduce emissions but also conserve fuel, improve
                operational economics, and contribute to India’s clean energy
                future.
              </p>
              <p className="fs-5">
                We are also exploring solar integration and green hydrogen
                readiness to further diversify and future-proof our energy
                ecosystem.
              </p>
            </div>
          }
        />
      </section>

      {/* News & Features Section */}
      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between">
            <h2 className="h3 text-uppercase cambria-bold">News & Features</h2>
            <SliderIcons />
          </div>
          <News />
        </Container>
      </section>

      {/* The Road Ahead Section */}

      <Banner image="Power/road.webp">
        <div
          className="d-flex align-items-center"
          style={{ maxWidth: "500px", height: "100%" }}
        >
          <div className="">
            <h1 className="fs-2 cambria-bold">The Road Ahead</h1>
            <p className="lead mt-3">
              We are committed to expanding our clean power capacity as our
              business scales. With sustainability at the core, our power
              division will continue to evolve — integrating smarter, cleaner
              technologies to energize every part of the value chain.
            </p>
            <Button
              variant="light"
              href="#contact-us"
              className="mt-3 text-green fw-bold px-5 fs-5"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Banner>
    </div>
  );
};

export default SteelBusiness;
