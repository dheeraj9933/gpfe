import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const NewsSmall: React.FC<any> = ({ data }) => {
  return (
    <div className="align-items-stretch d-flex flex-column h-100 p-3">
      <h3 className="fs-18 helvetica-neue-reg mb-3">{data.title}</h3>
      <p className="fs-6 clamp-text-2">{data.content}</p>
      <Link to={`/news/${data.id}`} className="text-decoration-none text-red align-self-end mt-auto myriad-reg-bold">
        Press Release <ArrowUpRight />
      </Link>
    </div>
  );
};

const NewsBig: React.FC<any> = ({ data }) => {
  return (
    <div className="d-flex flex-column h-100 p-3">
      <Image src={data.image} alt="News Image" fluid />
      <h3 className="fs-18 helvetica-neue-reg mt-3">{data.title}</h3>
      <p className="fs-6 clamp-text">{data.content}</p>
      <Link to={`/news/${data.id}`} className="text-decoration-none text-red align-self-end mt-auto myriad-reg-bold">
        Press Release <ArrowUpRight className="fw-bold" />
      </Link>
    </div>
  );
};

import "./styles.scss";
import { ArrowUpRight } from "react-bootstrap-icons";
import { Link } from "react-router";
const News = ({ newsItems }: { newsItems: Array<any> }) => {

  return (
    <div className="news-section">
      {/* <Row className="gap-row-3 gap-lg-3 flex-wrap my-3"> */}
      <Row className="flex-wrap my-3 news-items-container">
        {newsItems &&
          newsItems.map((newsItem: any, index: number) => {
            return index === 0 || index === 3 ? (
              <Col className="flex-40 light-grey-bg news-item my-3">
                <NewsBig data={newsItem} />
              </Col>
            ) : (
              <Col className="flex-24 light-grey-bg news-item my-3">
                <NewsSmall data={newsItem} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default News;
