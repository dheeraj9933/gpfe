import { useEffect, useState } from "react";
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import FutureSection from "./internal/FutureSection";
import AboutUs from "./internal/About Us";
import Industry from "./internal/Industry";
import Sustainability from "./internal/Sustainability";
import Career from "./internal/Career";
import WorkCulture from "./internal/WorkCulture";
import Clients from "./internal/Clients";
import News from "../common/News";
import Tags from "~/common/Tags";
import { Link } from "react-router";
import { ArrowRight } from "react-bootstrap-icons";
import Banner from "~/common/Banner";
import axios from "axios";

import "./welcome.scss";

export function Welcome() {
  const [news, setNews] = useState<Array<any>>([]);
  const url = `${import.meta.env.VITE_API_URL}api/news/`;
  const getNews = () =>
    axios
      .get(url)
      .then(function (response) {
        if(response.data && Array.isArray(response.data)) {
          setNews(response.data.slice(0, 6));
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch(function (error) {
        console.error("There was an error fetching the news!", error);
      });

  useEffect(() => {
    getNews();
  }, []);
  
  return (
    <>
      <main className="">
        {/* Hero section */}
        <Carousel fade controls={false} indicators={false} pause={false}>
          <Carousel.Item>
            <Banner image="HomePage/banner.webp" className="">
              <div className="banner-text">
                <div className="inner-text-container">
                  <h2 className="cambria-bold-it mb-3">
                    Strength in Every Load. Progress in Every Pipe.
                  </h2>
                  <p className="myriad-reg">
                    At GP Agarwal Group, our steel pipes move more than material
                    — they carry the vision of a stronger, better-connected
                    India. From production to project delivery, every load
                    represents precision, trust, and the backbone of
                    infrastructure.
                  </p>
                </div>
              </div>
            </Banner>
          </Carousel.Item>
          <Carousel.Item>
            <Banner image="HomePage/banner2.webp" className="">
              <div className="banner-text">
                <div className="inner-text-container">
                  <h2 className="cambria-bold-it mb-3">
                    Piping Life Forward, Sustainably.
                  </h2>
                  <p className="myriad-reg">
                    Clean water, clean energy, and a cleaner tomorrow — our
                    steel infrastructure powers smart cities with sustainability
                    at their core. Steel pipelines that connect not just places,
                    but possibilities.
                  </p>
                </div>
              </div>
            </Banner>
          </Carousel.Item>
        </Carousel>

        {/* Founder section */}
        <section className="founder-section">
          <Container>
            <Row className="py-5 my-5">
              <Col className="flex-50 mobile-100">
                <div className="founder-img d-flex justify-content-center">
                  <Image src="HomePage/founder.webp" className="w-50" />
                </div>
              </Col>
              <Col className="position-relative flex-45 mt-4 mt-lg-0 founder-speech">
                <Image src="/annotations.png" className="speech-quote" />
                <h2 className="helvetica-neue-reg-it">
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
                  <h3 className="helvetica-neue-reg">Shri. Gopal Agarwal </h3>
                  <p className="helvetica-neue-reg">Shri. Gopal Agarwal </p>
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
          <Image src="HomePage/bg-poly-left.svg" className="bottom-left-bg" />
        </section>

        {/* Industry */}
        <section className="industry-section">
          <Industry />
        </section>

        {/* News */}
        <section className="padding-y-100 position-relative news-container">
          <Container>
            <h2 className="orange-text h3 text-uppercase helvetica-neue-reg">
              News & Features
            </h2>
            <div className="d-flex justify-content-between my-4">
              <Tags />
              <div className="fw-bold">
                <Link to="/news" className="text-black text-decoration-none">
                  View More <ArrowRight className="fs-5" />
                </Link>
              </div>
            </div>
            <News newsItems={news}/>
          </Container>
          <Image src="HomePage/bg-poly-top.svg" className="top-right-bg" />
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
