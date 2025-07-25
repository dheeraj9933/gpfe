import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import Reveal from "~/common/Reveal";
import { useNavigate } from "react-router";

const Career: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container
      fluid
      className="career background-image"
      style={{
        backgroundImage: "url('/HomePage/career.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="career-container">
        <Reveal config={{ fromLeft: true }} className="position-relative z-1">
          <div className="career-text d-flex justify-content-center flex-column gap-2 text-white ">
            <h2 className="orange-text fs-5  helvetica-neue-reg text-uppercase">Career</h2>
            <h2 className="fs-3 cambria-bold">
              Empowered People. Empowering Progress.
            </h2>
            <p className="fs-5">
              Discover your next chapter with us. The future isn’t built alone.
              At GP Agarwal Group, we’re creating a thriving ecosystem where
              professionals, entrepreneurs, and partners come together to drive
              transformation.
            </p>
            <div>
              <Button className="px-4 mt-3" variant="danger"  onClick={() => navigate("/careers")}>
                Explore
              </Button>
            </div>
          </div>
        </Reveal>

        {/* <Image src="HomePage/career.png" className="career-img-1" /> */}
      </Container>
    </Container>
  );
};

export default Career;
