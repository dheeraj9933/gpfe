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
import { useNavigate } from "react-router";

const SteelBusiness = () => {
  const navigate = useNavigate();
  return (
    <div className="steel-page">
      {/* Hero Section */}
      <Banner image="Steel/banner.webp">
        <div className="flex-50"></div>
        <div className="flex-50 banner-inner-text">
          <div className="">
            <h1 className="fs-2 cambria-bold-it">
              Steel – The Backbone of Our Industrial Strength
            </h1>
            <p className="lead mt-3">Forging Quality. Delivering Trust.</p>
          </div>
        </div>
      </Banner>

      {/* Steel Ecosystem Section */}
      <section className="position-relative ecosystem">
        <HalfHalfSection
          leftContent={
            <Image
              src="Steel/ecosystem.webp"
              alt="Hands with Plant"
              fluid
              className="shadow border-rounded"
              style={{ minHeight: "600px", objectFit: "cover" }}
            />
          }
          rightContent={
            <div className="d-flex flex-column gap-3">
              <h2 className="helvetica-neue-reg">The Steel Ecosystem</h2>
              <p className="fs-5 justified-text">
                Steel lies at the core of GP Agarwal Group’s journey—a symbol of
                our commitment to building India’s industrial future with
                strength, precision, and purpose.
              </p>
              <p className="fs-5 justified-text">
                Through our flagship entity, Maruti Ispat & Pipes Pvt. Ltd.
                (MIPPL), we have emerged as one of South India’s largest
                integrated steel plants—spread across 200+ acres in Martsalayam,
                Andhra Pradesh. It allows us to control every step of the
                production process—from raw material to finished product.
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
                <Card className="border-0 text-center box-shadow-light overflow-hidden">
                  <Card.Img
                    variant="top"
                    src="Steel/offer-1.webp"
                    alt="Sponge Iron"
                  />
                  <Card.Body>
                    <Card.Title className="helvetica-neue-reg">
                      Sponge Iron
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col className="flex-30">
              <Reveal config={{ popIn: true }}>
                <Card className="border-0 text-center box-shadow-light  overflow-hidden">
                  <Card.Img
                    variant="top"
                    src="Steel/offer-2.jpg"
                    alt="Steel Billets"
                  />
                  <Card.Body>
                    <Card.Title className="helvetica-neue-reg">
                      Steel Billets
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            <Col className="flex-30">
              <Reveal config={{ popIn: true }}>
                <Card className="border-0 text-center box-shadow-light  overflow-hidden">
                  <Card.Img
                    variant="top"
                    src="Steel/offer-3.webp"
                    alt="ERW Steel Pipes"
                  />
                  <Card.Body>
                    <Card.Title className="helvetica-neue-reg">
                      ERW Steel Pipes
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
            {/* <Col className="flex-30">
              <Reveal config={{ popIn: true }}>
                <Card className="border-0 text-center box-shadow-light  overflow-hidden">
                  <Card.Img
                    variant="top"
                    src="Steel/offer-4.webp"
                    alt="Hot Rolled Coils"
                  />
                  <Card.Body>
                    <Card.Title className="helvetica-neue-reg">
                      Hot Rolled Coils
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col> */}
            {/* <Col className="flex-30">
              <Reveal config={{ popIn: true }}>
                <Card className="border-0 text-center box-shadow-light  overflow-hidden">
                  <Card.Img
                    variant="top"
                    src="Steel/offer-5.webp"
                    alt="High-Tensile Solutions"
                  />
                  <Card.Body>
                    <Card.Title className="helvetica-neue-reg">
                      High-Tensile Solutions
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col> */}
          </Row>
        </Container>
        <Image src="Steel/poly-bottom-right.png" className="bottom-right-bg" />
      </section>

      {/* Industries we serve 5 3 3 */}
      <section className="padding-y-100">
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
          <div className="d-flex flex-wrap image-collage justify-content-between">
            <Reveal config={{ popIn: true }} className="flex-49">
              <ImageWithText
                src="Steel/collage-4.png"
                alt="Collage 4"
                text="Railway Bogey (Suspension)"
              />
            </Reveal>
            <Reveal config={{ popIn: true }} className="flex-49">
              <ImageWithText
                src="Steel/collage-5.png"
                alt="Collage 5"
                text="CMS Crossing Coupler"
              />
            </Reveal>
          </div>
          <div className="d-flex flex-wrap image-collage justify-content-between">
            <Reveal config={{ popIn: true }} className="flex-28">
              <ImageWithText
                src="Steel/collage-6.png"
                alt="Collage 6"
                text="WHRB Power Plant"
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

      {/* Roadmap Section */}
      <section className="padding-y-100 text-white dark-blue-bg position-relative">
        <Image
          src="Steel/tree.svg"
          className="top-right-bg"
          alt="Roadmap Background"
        />
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <Reveal config={{ fromLeft: true, delay: 0.2 }}>
                <Image
                  src="Steel/roadmap.webp"
                  alt="Roadmap"
                  fluid
                  className="rounded shadow"
                />
              </Reveal>
            </Col>
            <Col md={6}>
              <Reveal config={{ fromRight: true, delay: 0.2 }}>
                <h2 className="h3 cambria-bold ">
                  Our roadmap for building a sustainable, responsible future.
                </h2>
                <p className="fs-5 justified-text">
                  At GP Agarwal Group, our commitment to sustainability is not
                  limited to today. We are investing in long-term solutions that
                  protect our environment, empower communities, and build
                  resilience for the generations to come.
                </p>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </section>

      {/* News & Features Section */}
      {/* <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between">
            <h2 className="h3 text-uppercase  cambria-bold ">
              News & Features
            </h2>
            <SliderIcons />
          </div>
          <Reveal config={{ fromBottom: true, delay: 0.2 }}>
            <News />
          </Reveal>
        </Container>
      </section> */}

      {/* The Road Ahead Section */}
      <Banner image="Steel/road.webp">
        <Reveal config={{ fromRight: true, delay: 0.2 }} className="h-100">
          <div
            className="d-flex align-items-center"
            style={{ maxWidth: "400px", height: "100%" }}
          >
            <div className="">
              <h1 className="fs-2  cambria-bold">The Road Ahead</h1>
              <p className="lead mt-3">
                {" "}
                At GP Agarwal Group, our commitment to sustainability is limited
                to empowering communities, and it builds resilience for the
                generations to come.
              </p>
              <Button
                variant="light"
                className="mt-3 text-dark-blue fw-bold px-5 fs-5"
                onClick={() => navigate("/contact-us")}
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

export default SteelBusiness;
