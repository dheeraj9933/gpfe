import axios from "axios";
import React, { useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const AddNews: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const [image, setImage] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");

  const navigate = useNavigate();

  const url = `${import.meta.env.VITE_API_URL}api/news/`;

  const addNews = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Please enter both title and content");
      return;
    }

    return axios
      .post(
        url,
        { title, image, content },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(function (response) {
        if (response.data) {
          navigate("/news");
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch(function (error) {
        localStorage.removeItem("token");
        console.error("There was an error fetching the news!", error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <Container className="padding-y-100">
      <h1 className="text-center mt-5">Add News</h1>
      {/* Add your form or content here */}
      <Form className="mx-auto text-center">
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group className="mb-3 text-start" controlId="firstName">
              <Form.Label className="fw-semi-bold">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the news title"
                className="light-form-bg"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group className="mb-3 text-start" controlId="lastName">
              <Form.Label className="fw-semi-bold">Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the image URL"
                className="light-form-bg"
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group className="mb-3 text-start" controlId="lastName">
              <Form.Label className="fw-semi-bold">Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter the news content"
                className="light-form-bg"
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="danger" type="submit" onClick={addNews}>
          Add News
        </Button>
      </Form>
    </Container>
  );
};

export default AddNews;
