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
      <Banner image="Supplier/banner.webp">
        <div className="" style={{ flexBasis: "50%" }}></div>
        <div
          className=""
          style={{ flexBasis: "50%", width: "45%", maxWidth: "400px" }}
        >
          <div className="">
            <h1 className="fs-2 fst-italic mb-2">
              Partnering for Progress: Our Suppliers
            </h1>
            <p>
              At GP Agarwal Group, we believe strong partnerships with our
              suppliers are the foundation of our continued success. By working
              with trusted, ethical, and innovative suppliers, we ensure the
              quality, consistency, and sustainability of everything we deliver.
            </p>
          </div>
        </div>
      </Banner>

      {/* Partner Ecosystem Section */}
      <section className="padding-y-100">
        <HalfHalfSection
          leftContent={
            <Image
              src="Supplier/foundation.png"
              alt="Work Culture"
              fluid
              className="shadow border-rounded"
            />
          }
          rightContent={
            <div className="d-flex flex-column gap-3">
              <h2 className="h4 orange-text text-uppercase m-0">
                Strengthening Foundations
              </h2>
              <h3 className="h4  m-0">Building a Network of Excellence</h3>
              <p style={{ maxWidth: "500px" }}>
                At GP Agarwal Group, our suppliers are more than just vendors —
                they are strategic partners in our journey toward innovation,
                quality, and growth. We rely on a robust network of reliable,
                ethical, and quality-driven suppliers who share our values of
                integrity, efficiency, and continuous improvement.
              </p>
            </div>
          }
        />
      </section>

      <section className="padding-y-100 bg-light-blue ">
        <Container>
          <div className="card-container justify-content-between grid-container-3">
            <Col className="flex-30 d-flex ">
              <div className="d-flex flex-column justify-content-center h-100 w-75">
                <h3 className="h4 orange-text text-uppercase">
                  Why Partner With Us
                </h3>
                <h4 className="h3">Our Terms & Value Proposition</h4>
              </div>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 p-4 h-100 border-rounded">
                <Card.Body className="p-0">
                  <div className="d-flex align-items-center column-gap-3">
                    <Card.Img
                      variant="top"
                      src="Supplier/terms1.svg"
                      alt="Clean Manufacturing"
                      className="rounded-circle mb-2"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <Card.Title>Values-Driven</Card.Title>
                  </div>
                  <Card.Text>
                    We believe in building relationships that go beyond
                    transactions. Our partnerships are built on mutual trust,
                    aligned values, and shared goals, aiming for consistent
                    growth, and collective success over the years.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 p-4 h-100 border-rounded">
                <Card.Body className="p-0">
                  <div className="d-flex align-items-center column-gap-3">
                    <Card.Img
                      variant="top"
                      src="Supplier/terms2.svg"
                      alt="Clean Manufacturing"
                      className="rounded-circle mb-2"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <Card.Title>Ethical Procurement</Card.Title>
                  </div>
                  <Card.Text>
                    Integrity is at the core of how we do business. Our
                    procurement process is open, standardized, and fully
                    compliant with regulatory frameworks. We ensure every vendor
                    is treated fairly to foster mutual confidence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 p-4 border-rounded h-100">
                <Card.Body className="p-0">
                  <div className="d-flex align-items-center column-gap-3">
                    <Card.Img
                      variant="top"
                      src="Supplier/terms3.svg"
                      alt="Clean Manufacturing"
                      className="rounded-circle mb-2"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <Card.Title>Inventive Spirit</Card.Title>
                  </div>
                  <Card.Text>
                    We welcome suppliers and partners who bring fresh ideas,
                    materials, or technologies to the table to improve
                    efficiency, performance, or sustainability, and adopt
                    forward-thinking practices that add measurable value.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 p-4 border-rounded h-100">
                <Card.Body className="p-0">
                  <div className="d-flex align-items-center column-gap-3">
                    <Card.Img
                      variant="top"
                      src="Supplier/terms4.svg"
                      alt="Clean Manufacturing"
                      className="rounded-circle mb-2"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <Card.Title>Sustainability</Card.Title>
                  </div>
                  <Card.Text>
                    We actively seek partnerships with suppliers who uphold
                    sustainable sourcing, low-impact manufacturing, and ethical
                    labour practices, ensuring that every part of our value
                    chain reflects our commitment to a better future.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="flex-30">
              <Card className="border-0 p-4 border-rounded h-100">
                <Card.Body className="p-0">
                  <div className="d-flex align-items-center column-gap-3">
                    <Card.Img
                      variant="top"
                      src="Supplier/terms5.svg"
                      alt="Clean Manufacturing"
                      className="rounded-circle mb-2"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <Card.Title>Vision in Action</Card.Title>
                  </div>
                  <Card.Text>
                    Aligning with partners who believe in long-term value
                    creation, innovation, and contributing to a sustainable and
                    inclusive future. Together, we aim to build solutions that
                    leave a meaningful footprint.
                  </Card.Text>
                </Card.Body>
              </Card>
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
            <h2 className="text-center mb-5 h2">What We Look For</h2>
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

      <Banner image="Supplier/cta.webp">
        <div
          className="d-flex align-items-center"
          style={{ maxWidth: "400px", height: "100%" }}
        >
          <div className="">
            <h1 className="fs-2 ">Be a Supplier</h1>
            <p className="lead mt-3">
              If you are interested in partnering with us, kindly reach out via
              our contact page or drop an email. Let’s create lasting impact
              together.
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
