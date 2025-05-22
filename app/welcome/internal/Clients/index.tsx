import React from "react";
import { Container, Image } from "react-bootstrap";

const Clients: React.FC = () => {
  return (
    <Container fluid className="clients">
      <Container className="clients-text d-flex gap-4 align-items-end">
        <div className="d-flex flex-column gap-2 w-25">
          <h3 className="h5 text-uppercase m-0 mt-3 orange-text">CLIENTS</h3>
          <h4>Powering India’s Leading Projects</h4>
          <p>
            We are proud to partner with some of India’s most respected names in
            infrastructure, construction, energy, and public sector enterprises.
          </p>
        </div>
        <Image src="/clients.png" alt="clients" className="clients-img" />
      </Container>
    </Container>
  );
};

export default Clients;
