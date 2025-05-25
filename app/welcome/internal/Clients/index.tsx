import React from "react";
import { Container, Image } from "react-bootstrap";
import "./styles.scss";
const Clients: React.FC = () => {
  const clientList = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
  ];
  return (
    <Container fluid className="clients">
      <Container className="clients-text d-flex gap-4 align-items-end">
        <div className="d-flex clients-inner-container">
          <div className="client-text d-flex flex-column gap-2">
            <h3 className="h5 text-uppercase m-0 mt-3 orange-text helvetica-neue-reg">
              CLIENTS
            </h3>
            <h4 className="cambria-bold">Powering India’s Leading Projects</h4>
            <p className="fs-5">
              We are proud to partner with some of India’s most respected names
              in infrastructure, construction, energy, and public sector
              enterprises.
            </p>
          </div>
          <div className="clients-scroll d-flex align-items-center">
            <div className="clients-scroll-track">
              {clientList.map((client, index) => (
                <Image
                  key={index}
                  src={`HomePage/clients/${client}`}
                  alt="clients"
                  className="clients-img mx-2"
                  style={{ display: "inline-block" }}
                />
              ))}
              {/* Duplicate for seamless infinite loop */}
              {clientList.map((client, index) => (
                <Image
                  key={`duplicate-${index}`}
                  src={`HomePage/clients/${client}`}
                  alt="clients"
                  className="clients-img mx-2"
                  style={{ display: "inline-block" }}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Clients;
