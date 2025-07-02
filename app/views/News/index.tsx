import Banner from "~/common/Banner";
import Tags from "~/common/Tags";
import News from "~/common/News";
import { Button, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const NewsPage = () => {
  const [news, setNews] = useState<Array<any>>([]);
  const isAuthenticated = !!localStorage.getItem("token");
  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_API_URL}api/news`;
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
    <div>
      <Banner image="News/banner.webp">
        <div className="" style={{ flexBasis: "50%" }}></div>
        <div
          className=""
          style={{ flexBasis: "50%", width: "45%", maxWidth: "400px" }}
        >
          <div className="">
            <h1 className="fs-2 fst-italic mb-2">
              Insights. Innovations. Impact.
            </h1>
            <p>
              Stay updated with the latest stories, milestones, and industry
              insights from GP Agarwal Group. From project launches and
              sustainability wins to thought leadership and corporate
              announcements — explore how we’re shaping progress across our
              businesses.
            </p>
          </div>
        </div>
      </Banner>

      <section className="padding-y-100">
        <Container>
          {isAuthenticated && (
            <div className="d-flex justify-content-end">
              <Button
                variant="danger"
                type="submit"
                onClick={() => {
                  navigate("/add-news");
                }}
                className="mb-4"
              >
                Add News
              </Button>
            </div>
          )}
          <h2 className="orange-text h3 text-uppercase">News & Features</h2>
          <div className="d-flex justify-content-between my-4">
            <Tags />
            <div>
              <Form.Select
                className="ms-2 rounded-4 transparent-select"
                size="sm"
                aria-label="Default select example"
                style={{
                  backgroundColor: ` transparent`,
                  color: ` "white`,
                }}
              >
                <option>Latest</option>
                <option value="1">Old</option>
              </Form.Select>
            </div>
          </div>
          <News newsItems={news} />
        </Container>
      </section>
    </div>
  );
};
export default NewsPage;
