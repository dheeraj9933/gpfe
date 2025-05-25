import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router";
import Banner from "~/common/Banner";
import Tags from "~/common/Tags";
import News from "~/common/News";
import { Container, Form } from "react-bootstrap";

const NewsPage = () => {
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
          <News />
          <News />
          <News />
        </Container>
      </section>
    </div>
  );
};
export default NewsPage;
