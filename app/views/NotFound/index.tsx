import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="banner-img d-flex flex-column align-items-center justify-content-center vh-100 text-center text-white"
      style={{ backgroundImage: "url('not-found.jpg')" }}
    >
      <h1 className="display-1">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="mb-4">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Button variant="primary" onClick={() => navigate("/")}>
        Go to Homepage
      </Button>
    </Container>
  );
};

export default NotFound;
