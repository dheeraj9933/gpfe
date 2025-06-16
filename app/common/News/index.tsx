import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const NewsSmall: React.FC<any> = ({ data }) => {
  return (
    <div className="align-items-stretch d-flex flex-column h-100 p-3">
      <h3 className="fs-18 helvetica-neue-reg mb-3">{data.title}</h3>
      <p className="fs-6">{data.description}</p>
      <span className="text-red align-self-end mt-auto myriad-reg-bold">Press Release <ArrowUpRight /></span>
    </div>
  );
};

const NewsBig: React.FC<any> = ({ data }) => {
  return (
    <div className="d-flex flex-column h-100 p-3">
      <Image src={data.img} alt="News Image" fluid />
      <h3 className="fs-18 helvetica-neue-reg mt-3">{data.title}</h3>
      <p className="fs-6">{data.description}</p>
      <span className="text-red align-self-end mt-auto myriad-reg-bold">Press Release <ArrowUpRight className="fw-bold" /></span>
    </div>
  );
};

import "./styles.scss";
import { ArrowUpRight } from "react-bootstrap-icons";
const News: React.FC = (props) => {

  const newsData = {
    title:
      "Chairman Shekharan Merger with our businesses, community initiatives",
    description:
      "Get the latest news and feature stories on our businesses, community initiatives, heritage and people. Scroll to read.",
  };
  const newsData2 = {
    img: "/news.png",
    title:
      "Chairman Shekharan Merger with our businesses, community initiatives",
    description:
      "Get the latest news and feature stories on our businesses, community initiatives, heritage and people. Scroll to read.",
  };
  return (
    <div className="news-section">
      
      {/* <Row className="my-3"> */}
        {/* <Col md={12}> */}
          <Row className="gap-row-3 gap-lg-3 flex-wrap flex-lg-nowrap my-3">
            <Col md={12} lg={6} className="light-grey-bg news-item my-3">
              <NewsBig data={newsData2} />
            </Col>
            <Col md={6} lg={3} className="light-grey-bg news-item">
              <NewsSmall data={newsData} />
            </Col>
            <Col md={6} lg={3} className="light-grey-bg news-item">
              <NewsSmall data={newsData} />
            </Col>
          </Row>
        {/* </Col> */}
      {/* </Row> */}
    </div>
  );
};

export default News;
