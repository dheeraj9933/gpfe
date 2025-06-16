import React from "react";
import { Container, Row } from "react-bootstrap";
import { ArrowDown } from "react-bootstrap-icons";
import './styles.scss'

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
      }}
    >
      <Container className="d-flex flex-column">{children}</Container>
      <div className="arrow-container">
        <ArrowDown />
      </div>
    </section>
  );
};

export default Banner;
