import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const NewsSmall: React.FC<any> = ({ data }) => {
  return (
    <div className="align-items-stretch d-flex flex-column h-100 p-3">
      <h3 className="h5">{data.title}</h3>
      <p className="fs-6">{data.description}</p>
      <span className="text-red align-self-end mt-auto">Press Release</span>
    </div>
  );
};

const NewsBig: React.FC<any> = ({ data }) => {
  return (
    <div className="d-flex flex-column h-100 p-3">
      <Image src={data.img} alt="News Image" fluid />
      <h3 className="h5">{data.title}</h3>
      <p className="fs-6">{data.description}</p>
      <span className="text-red align-self-end mt-auto">Press Release</span>
    </div>
  );
};

import "./styles.scss";
const News: React.FC<{ lines?: number }> = (props) => {
  let lines = props.lines ?? 2;

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
    <Container className="news-section">
      <h2 className="orange-title">News & Features</h2>
      <Row className="my-3">
        <Col md={12}>
          <Row className="gap-3 flex-nowrap">
            <Col xs={6} className="light-grey-bg news-item">
              <NewsBig data={newsData2} />
            </Col>
            <Col md={3} className="light-grey-bg news-item">
              <NewsSmall data={newsData} />
            </Col>
            <Col md={3} className="light-grey-bg news-item">
              <NewsSmall data={newsData} />
            </Col>
          </Row>
        </Col>
      </Row>
      {lines > 1 && (
        <Row className="my-3">
          <Col md={12}>
            <Row className="gap-3 flex-nowrap">
              <Col xs={6} className="light-grey-bg news-item">
                <NewsBig data={newsData2} />
              </Col>
              <Col md={3} className="light-grey-bg news-item">
                <NewsSmall data={newsData} />
              </Col>
              <Col md={3} className="light-grey-bg news-item">
                <NewsSmall data={newsData} />
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default News;
