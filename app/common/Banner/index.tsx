import React from "react";
import { Container, Row } from "react-bootstrap";

const Banner = ({
  children,
  image,
}: {
  children: React.ReactNode;
  image: string;
}) => {
  return (
    <section
      className="py-5 text-white banner d-flex"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className="d-flex flex-column">{children}</Container>
    </section>
  );
};

export default Banner;
