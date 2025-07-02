import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router";

const NewsItem: React.FC = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState<any>({});
  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_API_URL}api/news/${newsId}`;
  const isAuthenticated = !!localStorage.getItem("token");
  const getNews = () =>
    axios
      .get(url)
      .then(function (response) {
        if (response.data) {
          setNews(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch(function (error) {
        if (error.response && error.response.status === 404) {
          navigate("/404");
        }
        console.error("There was an error fetching the news!", error);
      });

  const deleteUrl = `${import.meta.env.VITE_API_URL}api/news`;
  const deleteNews = () =>
    axios
      .delete(deleteUrl, { data: { id: newsId } })
      .then(function (response) {
        if (response.data) {
          navigate("/news");
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch(function (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
        console.error("There was an error fetching the news!", error);
      });

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Container>
      <div className="news-item-container padding-y-100">
        {isAuthenticated && (
          <div className="d-flex justify-content-end">
            <Button
              variant="danger"
              type="submit"
              onClick={() => {
                deleteNews();
              }}
              className="mb-4"
            >
              Delete News
            </Button>
          </div>
        )}
        <div>
          <Image src={news.image} className="w-100 mx-auto d-block" />
          <h2>{news.title}</h2>
          <p>{news.content}</p>
        </div>
      </div>
    </Container>
  );
};

export default NewsItem;
