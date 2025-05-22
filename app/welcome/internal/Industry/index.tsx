import React from "react";
import { Button, Container } from "react-bootstrap";

const Industry: React.FC = () => {
  return (
    <Container fluid className="p-0 d-flex flex-wrap">
      <div className="steel w-100 d-flex justify-content-center">
        <div className="steel-inner d-flex flex-column align-items-center gap-3">
          <span className="orange-text">Industry</span>
          <h2>Steel</h2>
          <Button className="px-4" variant="btn btn-outline-light">
            Know More
          </Button>
        </div>
      </div>
      <div className="casting w-50">
        <h3 className="text-center mt-5">Casting</h3>
      </div>
      <div className="power w-50">
        <h3 className="text-center mt-5">Power</h3>
      </div>
    </Container>
  );
};

export default Industry;
