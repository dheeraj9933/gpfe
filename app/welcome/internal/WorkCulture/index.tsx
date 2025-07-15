import React from "react";
import { Container, Image } from "react-bootstrap";
import Reveal from "~/common/Reveal";

const WorkCulture: React.FC = () => {
  return (
    <Container fluid className="work-culture">
      <Image src="/bg-poly-3.png" className="top-left-bg" />
      <Container className="work-culture-container d-flex flex-column">
         <Reveal config={{ fromUp: true }} className="d-flex justify-content-end">
          <Image
            src="work-culture.png"
            alt="work culture"
            className="work-culture-img w-50"
          />
        </Reveal>

        <div className="d-flex gap-4 text-dark dark-blue-bg work-culture-text">
          <div className="d-flex flex-column gap-2">
            <h3 className="h5 text-uppercase m-0 mt-3 orange-text helvetica-neue-reg">
              Work Culture
            </h3>
            <h4 className="text-white cambria-bold">
              Business with a Human Heart
            </h4>
            <p className="text-white fs-5">
              At GP Agarwal Group, our people are our strength. We nurture a
              culture of collaboration, diversity, and purpose — where every
              voice matters and every effort counts. Together, we’re not just
              building industries, we’re building futures.
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default WorkCulture;
