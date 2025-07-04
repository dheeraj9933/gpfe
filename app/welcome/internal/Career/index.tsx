import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { animationValues } from "~/utils/animateValues";

const Career: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <Container fluid className="career dark-blue-bg">
      <Container className="career-container">
        <motion.div
          {...animationValues({
            ref: ref,
            inView,
            fromLeft: true,
          })}
        >
          <div className="career-text d-flex justify-content-center flex-column gap-2 text-white ">
            <h2 className="orange-text fs-5  helvetica-neue-reg">Career</h2>
            <h2 className="fs-3 cambria-bold">
              Empowered People. Empowering Progress.
            </h2>
            <p className="fs-5">
              Discover your next chapter with us. The future isn’t built alone.
              At GP Agarwal Group, we’re creating a thriving ecosystem where
              professionals, entrepreneurs, and partners come together to drive
              transformation.
            </p>
            <div>
              <Button className="px-4 mt-3" variant="danger">
                Explore
              </Button>
            </div>
          </div>
        </motion.div>

        <Image src="HomePage/career.png" className="career-img-1" />
      </Container>
    </Container>
  );
};

export default Career;
