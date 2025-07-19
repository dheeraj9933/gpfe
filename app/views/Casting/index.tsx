import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "~/common/Banner";
import HalfHalfSection from "~/common/HalfHalfSection";
import "./styles.scss"; // Import your CSS file for custom styles
import ImageWithText from "~/common/ImageWithText";
import News from "~/common/News";
import SliderIcons from "~/common/SliderIcons";
import Reveal from "~/common/Reveal";

const Casting = () => {
  return (
    <div className="casting-page">
      {/* Hero Section */}
      <Banner image="Casting/banner.webp">
        <div className="flex-50"></div>
        <div className="flex-50 banner-inner-text">
          <div className="">
            <h1 className="fs-2 cambria-bold-it">
              Casting – Precision That Powers Progress
            </h1>
            <p className="lead mt-3">Engineering Strength Through Every Mold</p>
          </div>
        </div>
      </Banner>

      {/* Casting Ecosystem Section */}
      <section className="position-relative ecosystem">
        <HalfHalfSection
          leftContent={
            <Image
              src="Casting/ecosystem.png"
              alt="Hands with Plant"
              fluid
              className="shadow border-rounded"
            />
          }
          rightContent={
            <div className="d-flex flex-column gap-3">
              <h2 className="helvetica-neue-reg">The Casting Ecosystem</h2>
              <p className="fs-5">
                GP Agarwal Group, with a legacy rooted in decades of industrial
                innovation, has steadily evolved into a trusted name in
                precision metal casting through Veehan Castings, we deliver
                high-quality ferrous and non-ferrous cast components that
                support critical industries across the country.
              </p>
              <p className="fs-5">
                Our foundry operations are designed to meet the evolving demands
                of infrastructure, automotive, energy, water, and engineering
                sectors, combining legacy expertise with cutting-edge casting
                technology.
              </p>
            </div>
          }
        />
        <Image src="Steel/poly-bg-mid.svg" className="mid-left-bg" />
      </section>

      {/* What We Offer Section */}
      <section className="py-5 position-relative what-we-offer">
        <Container>
          <h2 className="text-center mb-5 cambria-bold">What We Offer</h2>
          <Row className="flex-container">
            <Col className="flex-30">
              <Reveal config={{ popIn: true }}>
                <Card className="border-0 text-center box-shadow-light">
                  <Card.Img
                    variant="top"
                    src="Casting/offer1.webp"
                    alt="Grey & Ductile Iron Castings"
                  />
                  <Card.Body>
                    <Card.Title>Grey & Ductile Iron Castings</Card.Title>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col className="flex-30">
              <Reveal config={{ popIn: true }}>
                <Card className="border-0 text-center box-shadow-light">
                  <Card.Img
                    variant="top"
                    src="Casting/offer2.webp"
                    alt="Non-ferrous Components"
                  />
                  <Card.Body>
                    <Card.Title>Non-ferrous Components</Card.Title>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col className="flex-30">
              <Reveal config={{ popIn: true }}>
                <Card className="border-0 text-center box-shadow-light">
                  <Card.Img
                    variant="top"
                    src="Casting/offer3.webp"
                    alt="Custom Engineering Casts"
                  />
                  <Card.Body>
                    <Card.Title>Custom Engineering Casts</Card.Title>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col className="flex-30">
              <Reveal config={{ popIn: true }}>
                <Card className="border-0 text-center box-shadow-light">
                  <Card.Img
                    variant="top"
                    src="Casting/offer4.webp"
                    alt="Structural Cast Parts"
                  />
                  <Card.Body>
                    <Card.Title>Structural Cast Parts</Card.Title>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col className="flex-30">
              <Reveal config={{ popIn: true }}>
                <Card className="border-0 text-center box-shadow-light">
                  <Card.Img
                    variant="top"
                    src="Casting/offer5.webp"
                    alt="Corrosion-Resistant Grades"
                  />
                  <Card.Body>
                    <Card.Title>Corrosion-Resistant Grades</Card.Title>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
          </Row>
        </Container>
        <Image src="Steel/poly-bottom-right.png" className="bottom-right-bg" />
      </section>

      {/* Key Infrastructure Section 5 3 3 */}
      <section className="dark-blue-bg text-white padding-y-100">
        <HalfHalfSection
          leftContent={
            <Image
              src="Casting/Rectangle74.png"
              alt="Hands with Plant"
              fluid
              className="shadow border-rounded"
            />
          }
          rightContent={
            <div className="d-flex flex-column gap-3">
              <h2 className=" cambria-bold">Facility Capabilities</h2>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li className="mb-3 fs-5 d-flex align-items-center">
                  <Image src="Casting/facility1.svg" className="me-3" />
                  <span>Foundry with Automated Lines</span>
                </li>
                <li className="mb-3 fs-5  d-flex align-items-center">
                  <Image src="Casting/facility2.svg" className="me-3" />
                  <span>Integrated Pattern Making & Machining</span>
                </li>
                <li className="mb-3 fs-5 d-flex align-items-center">
                  <Image src="Casting/facility3.svg" className="me-3" />
                  <span>Testing & Inspection Advanced Quality</span>
                </li>
                <li className="mb-3 fs-5 d-flex align-items-center">
                  <Image src="Casting/facility4.svg" className="me-3" />
                  <span>Flexible Production Custom to High-Volume</span>
                </li>
              </ul>
            </div>
          }
        />
      </section>

      {/* Industries We Serve Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 cambria-bold">Industries We Serve</h2>
          <div className="d-flex flex-wrap image-collage justify-content-between">
            <Reveal config={{ popIn: true }} className="flex-40">
              <ImageWithText
                src="Steel/collage-1.png"
                alt="Collage 1"
                text="Infrastructure & Construction"
              />
            </Reveal>
            <Reveal config={{ popIn: true }} className="flex-28">
              <ImageWithText
                src="Steel/collage-2.png"
                alt="Collage 2"
                text="Oil & Gas"
              />
            </Reveal>
            <Reveal config={{ popIn: true }} className="flex-28">
              <ImageWithText
                src="Steel/collage-3.png"
                alt="Collage 3"
                text="Power & Energy"
              />
            </Reveal>
          </div>
          <div className="my-0 my-md-4 d-flex flex-wrap image-collage justify-content-between">
            <Reveal config={{ popIn: true }} className="flex-49">
              <ImageWithText
                src="Steel/collage-4.png"
                alt="Collage 4"
                text="Railways"
              />
            </Reveal>
            <Reveal config={{ popIn: true }} className="flex-49">
              <ImageWithText
                src="Steel/collage-5.png"
                alt="Collage 5"
                text="Automotive"
              />
            </Reveal>
          </div>
          <div className="d-flex flex-wrap image-collage justify-content-between">
            <Reveal config={{ popIn: true }} className="flex-28">
              <ImageWithText
                src="Steel/collage-6.png"
                alt="Collage 6"
                text="Water"
              />
            </Reveal>
            <Reveal config={{ popIn: true }} className="flex-28">
              <ImageWithText
                src="Steel/collage-7.png"
                alt="Collage 7"
                text="Agriculture"
              />
            </Reveal>
            <Reveal config={{ popIn: true }} className="flex-40">
              <ImageWithText
                src="Steel/collage-8.png"
                alt="Collage 8"
                text="Solar"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* News & Features Section */}
      {/* <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between">
            <h2 className="h3 text-uppercase cambria-bold">News & Features</h2>
            <SliderIcons />
          </div>
          <Reveal config={{ fromBottom: true }}>
            <News />
          </Reveal>
        </Container>
      </section> */}

      {/* The Road Ahead Section */}

      <Banner image="Casting/road.webp">
        <Reveal config={{ fromRight: true, delay: 0.2 }} className="h-100">
          <div
            className="d-flex align-items-center"
            style={{ maxWidth: "500px", height: "100%" }}
          >
            <div className="">
              <h1 className="fs-2 cambria-bold ">The Road Ahead</h1>
              <p className="lead mt-3">
                {" "}
                With plans to expand capacity and adopt green casting
                techniques, we are on a mission to become a preferred supplier
                of precision-engineered castings not just across India, but
                globally. Our focus remains clear: to deliver castings that
                enable real-world performance, durability, and progress.
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
        </Reveal>
      </Banner>
    </div>
  );
};

export default Casting;
