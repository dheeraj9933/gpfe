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
import Banner from "~/common/Banner";
import HalfHalfSection from "~/common/HalfHalfSection";
import ImageWithText from "~/common/ImageWithText";

const Partners = () => {
  return (
    <div className="customers-page">
      {/* Hero Section */}
      <Banner image="Customers/banner.webp">
        <div className="" style={{ flexBasis: "50%" }}></div>
        <div
          className=""
          style={{ flexBasis: "50%", width: "50%", maxWidth: "500px" }}
        >
          <div className="">
            <h1 className="fs-2  cambria-bold-it mb-2">
              Your Vision, Our Commitment
            </h1>
            <p className="fs-5">
              We are committed to understanding our customers’ unique needs and
              delivering solutions that exceed expectations. With a focus on
              quality, reliability, and long-term value, we partner with clients
              across industries to power their ambitions.
            </p>
          </div>
        </div>
      </Banner>

      {/* Partner Ecosystem Section */}
      <section className="padding-y-100">
        <HalfHalfSection
          leftContent={
            <Image
              src="Customers/trust.png"
              alt="Work Culture"
              fluid
              className="shadow border-rounded"
            />
          }
          rightContent={
            <div className="d-flex flex-column gap-3">
              <h2 className="h5 orange-text text-uppercase m-0 helvetica-neue-reg">
                Our Customer Philosophy
              </h2>
              <h3 className="h3 cambria-bold m-0">
                Your Trust. <br /> Our Responsibility.
              </h3>
              <p className="fs-5" style={{ maxWidth: "500px" }}>
                For decades, GP Agarwal Group has stood as a symbol of
                reliability for our customers across India and beyond. We serve
                industries that demand strength, precision, and accountability —
                from infrastructure to energy, automotive to construction.
              </p>
            </div>
          }
        />
      </section>
      {/* Global Presence Section */}
      <section className="padding-y-100 bg-light customer-grid-collage">
        <Container>
          <div className="card-container justify-content-between grid-container-3">
            <Col className="flex-30 d-flex ">
              <div className="d-flex flex-column justify-content-center h-100 w-75">
                <h3 className="h5 orange-text text-uppercase helvetica-neue-reg">our customers</h3>
                <h4 className="h3 cambria-bold">Industries that We Serve</h4>
              </div>
            </Col>
            <Col className="flex-30">
              <ImageWithText
                src="Customers/collage1.png"
                alt="Collage 1"
                text="Steel & Manufacturing"
              />
            </Col>
            <Col className="flex-30">
              <ImageWithText
                src="Customers/collage2.png"
                alt="Collage 1"
                text="Casting & Foundries"
              />
            </Col>
            <Col className="flex-30">
              <ImageWithText
                src="Customers/collage3.png"
                alt="Collage 1"
                text="Power & Utilities"
              />
            </Col>
            <Col className="flex-30">
              <ImageWithText
                src="Customers/collage4.png"
                alt="Collage 1"
                text="Infrastructure & Construction"
              />
            </Col>
            <Col className="flex-30">
              <ImageWithText
                src="Customers/collage5.png"
                alt="Collage 1"
                text="OEMs & Industry Contractors"
              />
            </Col>
          </div>
        </Container>
      </section>
      
      {/* Global Presence Section */}
      <section className="customer-grid-collage">
        <Container
          fluid
          className="padding-y-100 banner-img"
          style={{ backgroundImage: "url('Customers/promise.webp')" }}
        >
          <Container
            className="my-5 py-5 px-0 bg-white infra-internal border-rounded"
            style={{ width: "85%" }}
          >
            <h2 className="text-center mb-5 h2 cambria-bold">Our Promise to Customers</h2>
            <div className="flex-container no-gap">
              <Col className="flex-30 border-end border-bottom">
                <Card className="border-0 text-center p-4 ">
                  <Card.Img
                    variant="top"
                    src="Customers/promise1.svg"
                    alt="300 TPD Sponge Iron Kilns"
                    className="my-icon mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">Quality Product</Card.Title>
                    <Card.Text className="fw-bold">
                      Rigorous quality control for consistent output{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="flex-30 border-end border-bottom">
                <Card className="border-0 text-center p-4 ">
                  <Card.Img
                    variant="top"
                    src="Customers/promise2.svg"
                    alt="300 TPD Sponge Iron Kilns"
                    className="my-icon mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Compliance-Ready
                    </Card.Title>
                    <Card.Text className="fw-bold">
                      Adherence to certifications and industry norms.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="flex-30 border-bottom">
                <Card className="border-0 text-center p-4 ">
                  <Card.Img
                    variant="top"
                    src="Customers/promise3.svg"
                    alt="300 TPD Sponge Iron Kilns"
                    className="my-icon mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Tailored Solutions
                    </Card.Title>
                    <Card.Text className="fw-bold">
                      understanding project’s needs & customize offerings.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="flex-30 border-end">
                <Card className="border-0 text-center p-4 ">
                  <Card.Img
                    variant="top"
                    src="Customers/promise5.svg"
                    alt="300 TPD Sponge Iron Kilns"
                    className="my-icon mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      On time Delivery
                    </Card.Title>
                    <Card.Text className="fw-bold">
                      Aligned values in responsibility and impact.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="flex-30">
                <Card className="border-0 text-center p-4 ">
                  <Card.Img
                    variant="top"
                    src="Customers/promise4.svg"
                    alt="300 TPD Sponge Iron Kilns"
                    className="my-icon mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Tech Adaptability{" "}
                    </Card.Title>
                    <Card.Text className="fw-bold">
                      Openness to innovation and process upgrades.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </Container>
        </Container>
      </section>

      <Banner image="Customers/cta.webp">
        <div
          className="d-flex align-items-center"
          style={{ maxWidth: "400px", height: "100%" }}
        >
          <div className="">
            <h1 className="fs-2 cambria-bold">Partner With Us</h1>
            <p className="lead mt-3">
              Looking for a reliable industrial partner? Connect with our team
              today. We’re ready to power your vision with our capabilities and
              commitment.
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
      </Banner>
    </div>
  );
};

export default Partners;
