import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

import "./styles.scss";

const SliderIcons = () => {
  return (
    <div>
      <ChevronLeft className="slider-icon disabled me-2" />
      <ChevronRight className="slider-icon" />
    </div>
  );
};

export default SliderIcons;
