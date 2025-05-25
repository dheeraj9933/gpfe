import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

interface WhiteBoxProps {
  data: {
    heading: React.ReactNode;
    subHeading: string;
    text: string;
  };
}

const WhiteBox: React.FC<WhiteBoxProps> = ({ data }) => {
  return (
    <div className="white-box d-flex flex-column justify-content-center align-items-center h-100">
      <div>{data.heading}</div>
      <span className="fw-bold">{data.subHeading}</span>
      <span>{data.text}</span>
    </div>
  );
};

const FutureSection: React.FC = () => {
  const futureBoxes = [
    {
      heading: <h4 className="cambria-bold h3">200+</h4>,
      subHeading: "Acres",
      text: "Steel plant",
    },
    {
      heading: (
        <div>
          {" "}
          <Image src="HomePage/ISO.svg" className="" />
          <Image src="HomePage/BIS.svg" className="" />
        </div>
      ),
      subHeading: "ISO & BIS",
      text: "Certified",
    },
    { 
      heading: (
        <div>
          <Image src="HomePage/India.svg" className="" />
        </div>
      ),
      subHeading: "Pan-India",
      text: "Expansion",
    },
    {
      heading: <h4 className="cambria-bold h3">8</h4>,
      subHeading: "Mega Watt",
      text: "WHRV plant",
    },
    {
      heading: <h4 className="cambria-bold h3">4</h4>,
      subHeading: "Decades",
      text: "Legacy",
    },
  ];
  return (
    <Container fluid className="future py-5">
      <Container>
        <Row>
          <Col>
            <div className="d-flex flex-column justify-content-center align-items-end h-100">
              <Image src="/leaf.svg" />{" "}
              <p className="text-light cambria-bold text-end mt-2 fs-20">
                We are commited towards the Future
              </p>
            </div>
          </Col>
          {futureBoxes.map((future) => (
            <Col>
              <WhiteBox data={future} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default FutureSection;
