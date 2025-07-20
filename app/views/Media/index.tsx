import React from "react";
import { Container } from "react-bootstrap";
import "./styles.scss";
import Tags from "~/common/Tags";

const Media: React.FC = () => {
  const videos = [
    "https://www.youtube.com/embed/q-KR3JI8xwA?si=949NWJVNZlmyLnEk",
    "https://www.youtube.com/embed/0TkRfXduf2Y?si=xfFoni6baRAE99dD",
    "https://www.youtube.com/embed/YP2apJt7e08?si=9-7HG0ZbLPovvben",
    "https://www.youtube.com/embed/pLwouX9K6Wk?si=FELVrKtdSgkMzc_n",
    'https://www.youtube.com/embed/VdbYPx_tJQ8?si=EwR3f0b3g5r7t6lE',
    'https://www.youtube.com/embed/zfAggl1a8-0?si=YEji7pyl7gvs8kns'
  ];

  const tagListDefault = [
    {
      key: "all",
      label: "Video ",
      active: true,
    },
    {
      key: "press",
      label: "Images",
      active: false,
    },
    {
      key: "social",
      label: "Press Release",
      active: false,
    },
  ];
  return (
    <div className="padding-y-100">
      <Container className="media">
        <h2 className="orange-text h3 text-uppercase">Media</h2>
        <div className="mt-4 mb-5">
          <Tags tagList={tagListDefault}/>
        </div>
        <div className="flex">
          {videos.map((video) => (
            <div className="video-container">
              <iframe
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Media;
