import axios from "axios";
import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Login: React.FC = () => {
  const url = `${import.meta.env.VITE_API_URL}api/auth/login/`;
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const login = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!name || !password) {
      alert("Please enter both username and password");
      return;
    }
    
    return axios
      .post(url, { username: name, password })
      .then(function (response) {
        if (response.data) {
          localStorage.setItem("token", response.data.token);
          setIsAuthenticated(true);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch(function (error) {
        console.error("There was an error fetching the news!", error);
      });
  };
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  return (
    <Container className="padding-y-100">
      <Container className="text-center">
        {isAuthenticated ? (
          <div>
            <h2 className="mb-4">You are logged in</h2>
            <Button variant="danger" type="submit" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <>
            <h2 className="mt-5 mb-4 h3">Login</h2>
            <Form className="mx-auto">
              <Row className="justify-content-center">
                <Col md={6}>
                  <Form.Group className="mb-3 text-start" controlId="firstName">
                    <Form.Label className="fw-semi-bold">Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your username"
                      className="light-form-bg"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={6}>
                  <Form.Group className="mb-3 text-start" controlId="lastName">
                    <Form.Label className="fw-semi-bold">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      className="light-form-bg"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="danger" type="submit" onClick={login}>
                Login
              </Button>
            </Form>
          </>
        )}
      </Container>
      {/* Add your login form here */}
    </Container>
  );
};

export default Login;
