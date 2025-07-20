import React from "react";
import { Container, Row } from "react-bootstrap";
import { ArrowDown } from "react-bootstrap-icons";
import "./styles.scss";
import Reveal from "../Reveal";

const Banner = ({
  children,
  image,
  className,
}: {
  children: React.ReactNode;
  image: string;
  className?: string;
}) => {
  return (
    <section
      className={`py-5 text-white banner d-flex ${className}`}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        <Reveal
          config={{ fromRight: true, delay: 0.2 }}
          className="d-flex flex-column h-100"
        >
          {children}
        </Reveal>
      </Container>
      <div className="arrow-container">
        <ArrowDown />
      </div>
    </section>
  );
};

export default Banner;
