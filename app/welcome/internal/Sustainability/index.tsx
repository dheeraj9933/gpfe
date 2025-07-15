import React from "react";
import { Container, Image } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import Reveal from "~/common/Reveal";

const Sustainability: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <Container fluid className="sustainability position-relative dark-blue-bg">
      <Container className="">
        <Reveal config={{ popIn: true }}>
          <Image src="/sustain-1.png" alt="Sustainability" className="w-100" />
        </Reveal>
         <Reveal config={{ fromLeft: true }}>
          <div className="d-flex gap-4 bg-body text-dark sustainability-floater flex-wrap flex-lg-nowrap">
            <Image src="/sustain-2.png" alt="Sustainability" className="" />

            <div className="d-flex flex-column gap-2">
              <h3 className="h5 text-uppercase m-0 mt-3 orange-text helvetica-neue-reg">
                Sustainability
              </h3>
              <h4 className="cambria-bold">Business with a Human Heart</h4>
              <p>
                GP Agarwal Group champions community care and sustainability
                through education, daily meals, clean energy, and circular
                economy initiatives.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
      <Image
        src="/bg-poly-2.png"
        alt="Sustainability"
        className="bottom-right-bg"
      />
    </Container>
  );
};

export default Sustainability;
