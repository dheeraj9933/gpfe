import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./welcome.scss";
import FutureSection from "./internal/FutureSection";
import AboutUs from "./internal/About Us";
import Industry from "./internal/Industry";
import Sustainability from "./internal/Sustainability";
import Career from "./internal/Career";
import WorkCulture from "./internal/WorkCulture";
import Clients from "./internal/Clients";
import News from "./internal/News";

export function Welcome() {
  return (
    <>
      <main className="">
        {/* Hero section */}
        <Container
          fluid
          className="p-0 text-white min-vh-100"
          style={{
            backgroundImage: `url('/banner_1.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "300px", // or whatever height you need
          }}
          data-bs-theme="dark"
        >
          <Container className="banner-text">
            <div className="inner-text-container">
              <h2>Strength in Every Load. Progress in Every Pipe.</h2>
              <p>
                At GP Agarwal Group, our steel pipes move more than material —
                they carry the vision of a stronger, better-connected India.
                From production to project delivery, every load represents
                precision, trust, and the backbone of infrastructure.
              </p>
            </div>
          </Container>
        </Container>

        {/* Founder section */}
        <section className="founder-section">
          <Container>
            <Row className="py-5 my-5">
              <Col style={{ flexBasis: "50%", flexGrow: "0" }}>
                <div className="founder-img d-flex justify-content-center">
                  <Image src="/bg_frame.png" className="bg_poly" />
                  <Image src="/Mask-group.png" className="w-50" />
                </div>
              </Col>
              <Col
                className=""
                style={{
                  flexBasis: "45%",
                  flexGrow: "0",
                  position: "relative",
                }}
              >
                <Image src="/annotations.png" className="speech-quote" />
                <h2>
                  Cherish every day. We have adapted the journey as our
                  destination.
                </h2>
                <p>
                  At GP Agarwal Group, our mission is rooted in passion,
                  purpose, and people. Our founder, Late Shri Maneklal Agarwal
                  Ji, instilled in us the values of perseverance, moral
                  strength, and a commitment to uplift society.
                </p>
                <div className="d-flex flex-column my-4">
                  <h3>Shri. Gopal Agarwal </h3>
                  <span>Managing Director , GP Agarwal Group</span>
                </div>
                <div>
                  <Button className="px-4" variant="danger">
                    Know More
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* future section */}
        <section>
          <FutureSection />
        </section>

        {/* About Us */}
        <section className="about-us-section">
          <AboutUs />
          <Image src="/bg-poly-1.svg" className="bottom-left-bg" />
        </section>

        {/* Industry */}
        <section className="industry-section">
          <Industry />
        </section>

        {/* News */}
        <section className="py-5">
          <News />
        </section>

        {/* Sustainability */}
        <section>
          <Sustainability />
        </section>

        {/* Work culture */}
        <section>
          <WorkCulture />
        </section>

        {/* Clients*/}
        <section>
          <Clients />
        </section>

         {/* Career */}
        <section>
          <Career />
        </section>
      </main>
    </>
  );
}
