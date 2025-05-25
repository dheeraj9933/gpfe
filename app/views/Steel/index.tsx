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
    <div className="steel-page">
      {/* Hero Section */}
      <Banner image="Steel/banner.webp">
        <div className="" style={{ flexBasis: "50%" }}></div>
        <div
          className=""
          style={{ flexBasis: "50%", width: "45%", maxWidth: "400px" }}
        >
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
              src="Steel/ecosystem.png"
              alt="Hands with Plant"
              fluid
              className="shadow border-rounded"
            />
          }
          rightContent={
            <div className="d-flex flex-column gap-3">
              <h2 className="helvetica-neue-reg">The Steel Ecosystem</h2>
              <p className="fs-5">
                Steel lies at the core of GP Agarwal Group’s journey—a symbol of
                our commitment to building India’s industrial future with
                strength, precision, and purpose.
              </p>
              <p className="fs-5">
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
              <Card className="border-0 text-center box-shadow-light">
                <Card.Img
                  variant="top"
                  src="Steel/offer-1.webp"
                  alt="Sponge Iron"
                />
                <Card.Body>
                  <Card.Title className="helvetica-neue-reg">Sponge Iron</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 text-center box-shadow-light">
                <Card.Img
                  variant="top"
                  src="Steel/offer-2.webp"
                  alt="Steel Billets"
                />
                <Card.Body>
                  <Card.Title className="helvetica-neue-reg">Steel Billets</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 text-center box-shadow-light">
                <Card.Img
                  variant="top"
                  src="Steel/offer-3.webp"
                  alt="ERW Steel Pipes"
                />
                <Card.Body>
                  <Card.Title className="helvetica-neue-reg">ERW Steel Pipes</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 text-center box-shadow-light">
                <Card.Img
                  variant="top"
                  src="Steel/offer-4.webp"
                  alt="Hot Rolled Coils"
                />
                <Card.Body>
                  <Card.Title className="helvetica-neue-reg">Hot Rolled Coils</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 text-center box-shadow-light">
                <Card.Img
                  variant="top"
                  src="Steel/offer-5.webp"
                  alt="High-Tensile Solutions"
                />
                <Card.Body>
                  <Card.Title className="helvetica-neue-reg">High-Tensile Solutions</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Image src="Steel/poly-bottom-right.png" className="bottom-right-bg" />
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
            <h2 className="text-center mb-5 h2 cambria-bold">Key Infrastructure</h2>
            <div className="flex-container no-gap">
              <Col className="flex-30 border-end border-bottom">
                <Card className="border-0 text-center p-4 ">
                  <Card.Img
                    variant="top"
                    src="Steel/infra1.svg"
                    alt="300 TPD Sponge Iron Kilns"
                    className="my-icon mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold helvetica-neue-reg">300 TPD</Card.Title>
                    <Card.Text className="fw-bold helvetica-neue-reg">Sponge Iron Kilns</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="flex-30 border-end border-bottom">
                <Card className="border-0 text-center p-4 ">
                  <Card.Img
                    variant="top"
                    src="Steel/infra2.svg"
                    alt="300 TPD Sponge Iron Kilns"
                    className="my-icon mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold helvetica-neue-reg">Concast AG</Card.Title>
                    <Card.Text className="fw-bold helvetica-neue-reg">
                      Steel Melting Induction
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="flex-30 border-bottom">
                <Card className="border-0 text-center p-4 ">
                  <Card.Img
                    variant="top"
                    src="Steel/infra3.svg"
                    alt="300 TPD Sponge Iron Kilns"
                    className="my-icon mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold helvetica-neue-reg">1.7 MTPA</Card.Title>
                    <Card.Text className="fw-bold helvetica-neue-reg">Hot Strip Mill</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="flex-30 border-end">
                <Card className="border-0 text-center p-4 ">
                  <Card.Img
                    variant="top"
                    src="Steel/infra4.svg"
                    alt="300 TPD Sponge Iron Kilns"
                    className="my-icon mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold helvetica-neue-reg">8 MW WHRB</Card.Title>
                    <Card.Text className="fw-bold helvetica-neue-reg">Clean Power</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="flex-30">
                <Card className="border-0 text-center p-4 ">
                  <Card.Img
                    variant="top"
                    src="Steel/infra5.svg"
                    alt="300 TPD Sponge Iron Kilns"
                    className="my-icon mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold helvetica-neue-reg">In-house </Card.Title>
                    <Card.Text className="fw-bold helvetica-neue-reg">R&D Lab</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </Container>
        </Container>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 cambria-bold">Industries We Serve</h2>
          <div className="d-flex image-collage justify-content-between">
            <div className="flex-40">
              <ImageWithText
                src="Steel/collage-1.png"
                alt="Collage 1"
                text="Infrastructure & Construction"
              />
            </div>
            <div className="flex-28">
              <ImageWithText
                src="Steel/collage-2.png"
                alt="Collage 2"
                text="Oil & Gas"
              />
            </div>
            <div className="flex-28">
              <ImageWithText
                src="Steel/collage-3.png"
                alt="Collage 3"
                text="Power & Energy"
              />
            </div>
          </div>
          <div className="my-4 d-flex image-collage justify-content-between">
            <div className="flex-49">
              <ImageWithText
                src="Steel/collage-4.png"
                alt="Collage 4"
                text="Railways"
              />
            </div>
            <div className="flex-49">
              <ImageWithText
                src="Steel/collage-5.png"
                alt="Collage 5"
                text="Automotive"
              />
            </div>
          </div>
          <div className="d-flex image-collage justify-content-between">
            <div className="flex-28">
              <ImageWithText
                src="Steel/collage-6.png"
                alt="Collage 6"
                text="Water"
              />
            </div>
            <div className="flex-28">
              <ImageWithText
                src="Steel/collage-7.png"
                alt="Collage 7"
                text="Agriculture"
              />
            </div>
            <div className="flex-40">
              <ImageWithText
                src="Steel/collage-8.png"
                alt="Collage 8"
                text="Solar"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Roadmap Section */}
      <section className="padding-y-100 text-white green-bg position-relative">
        <Image
          src="Steel/tree.svg"
          className="top-right-bg"
          alt="Roadmap Background"
        />
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <Image
                src="Steel/roadmap.png"
                alt="Roadmap"
                fluid
                className="rounded shadow"
              />
            </Col>
            <Col md={6}>
              <h2 className="h3 cambria-bold ">
                Our roadmap for building a sustainable, responsible future.
              </h2>
              <p className="fs-5">
                At GP Agarwal Group, our commitment to sustainability is not
                limited to today. We are investing in long-term solutions that
                protect our environment, empower communities, and build
                resilience for the generations to come.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* News & Features Section */}
      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between">
            <h2 className="h3 text-uppercase  cambria-bold ">News & Features</h2>
            <SliderIcons />
          </div>
          <News />
        </Container>
      </section>

      {/* The Road Ahead Section */}
      <Banner image="Steel/road.webp">
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
