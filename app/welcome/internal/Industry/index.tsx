import React from "react";
import { Button, Container } from "react-bootstrap";

const Industry: React.FC = () => {
  return (
    <Container fluid className="p-0">
      <div className=" justify-content-between img-container">
        <div className="steel text-center d-flex flex-column justify-content-center row-gap-3">
          <h3 className="text-center cambria-bold">Steel</h3>
          <div>
            <Button className="px-4" variant="btn btn-outline-light">
              Know More
            </Button>
          </div>
        </div>
        <div className="power text-center d-flex flex-column justify-content-center row-gap-3">
          <h3 className="text-center cambria-bold">Power</h3>
          <div>
            <Button className="px-4" variant="btn btn-outline-light">
              Know More
            </Button>
          </div>
        </div>
        <div className="chemicals text-center d-flex flex-column justify-content-center row-gap-3">
          <h3 className="text-center mt-5 cambria-bold">Chemicals</h3>
          <div>
            <Button className="px-4" variant="btn btn-outline-light">
              Know More
            </Button>
          </div>
        </div>
        <div className="water text-center d-flex flex-column justify-content-center row-gap-3">
          <h3 className="text-center mt-5 cambria-bold">Water</h3>
          <div>
            <Button className="px-4" variant="btn btn-outline-light">
              Know More
            </Button>
          </div>
        </div>
        <div className="railways text-center d-flex flex-column justify-content-center row-gap-3">
          <h3 className="text-center mt-5 cambria-bold">Railways</h3>
          <div>
            <Button className="px-4" variant="btn btn-outline-light">
              Know More
            </Button>
          </div>
        </div>
        <div className="defence text-center d-flex flex-column justify-content-center row-gap-3">
          <h3 className="text-center mt-5 cambria-bold">Defence</h3>
          <div>
            <Button className="px-4" variant="btn btn-outline-light">
              Know More
            </Button>
          </div>
        </div>
      </div>
      
    </Container>
  );
};

export default Industry;
