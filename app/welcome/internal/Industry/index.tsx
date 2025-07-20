import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

const Industry: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="p-0">
      <div className=" justify-content-between img-container">
        <div className="steel text-center d-flex flex-column justify-content-center row-gap-3">
          <h3 className="text-center cambria-bold">Steel</h3>
          <div>
            <Button
              className="px-4"
              variant="btn btn-outline-light"
              onClick={() => navigate("/steel")}
            >
              Know More
            </Button>
          </div>
        </div>
        <div className="power text-center d-flex flex-column justify-content-center row-gap-3">
          <h3 className="text-center cambria-bold">Power</h3>
          <div>
            <Button
              className="px-4"
              variant="btn btn-outline-light"
              onClick={() => navigate("/power")}
            >
              Know More
            </Button>
          </div>
        </div>
        <div className="casting text-center d-flex flex-column justify-content-center row-gap-3">
          <h3 className="text-center cambria-bold">Casting</h3>
          <div>
            <Button
              className="px-4"
              variant="btn btn-outline-light"
              onClick={() => navigate("/casting")}
            >
              Know More
            </Button>
          </div>
        </div>
        <div className="water text-center d-flex flex-column justify-content-center row-gap-3">
          <h3 className="text-center cambria-bold">Water</h3>
          <div>
            <Button
              className="px-4"
              variant="btn btn-outline-light"
              onClick={() => navigate("/contact-us")}
            >
              Know More
            </Button>
          </div>
        </div>
        <div className="railways text-center d-flex flex-column justify-content-center row-gap-3">
          <h3 className="text-center cambria-bold">Railways</h3>
          <div>
            <Button
              className="px-4"
              variant="btn btn-outline-light"
              onClick={() => navigate("/contact-us")}
            >
              Know More
            </Button>
          </div>
        </div>
        <div className="defence text-center d-flex flex-column justify-content-center row-gap-3">
          <h3 className="text-center cambria-bold">Defence</h3>
          <div>
            <Button
              className="px-4"
              variant="btn btn-outline-light"
              onClick={() => navigate("/contact-us")}
            >
              Know More
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Industry;
