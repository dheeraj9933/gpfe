import React from "react";
import { Button, Container } from "react-bootstrap";

const Industry: React.FC = () => {
  return (
    <Container fluid className="p-0">
      <div className="steel w-100 d-flex justify-content-center">
        <div className="steel-inner d-flex flex-column align-items-center gap-3">
          <span className="orange-text helvetica-neue-reg fs-4">Industry</span>
          <h2 className="cambria-bold">Steel</h2>
          <Button className="px-4" variant="btn btn-outline-light">
            Know More
          </Button>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="casting">
          <h3 className="text-center mt-5 cambria-bold">Casting</h3>
        </div>
        <div className="power">
          <h3 className="text-center mt-5 cambria-bold">Power</h3>
        </div>
      </div>
    </Container>
  );
};

export default Industry;
