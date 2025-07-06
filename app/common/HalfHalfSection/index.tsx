import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { animationValues } from "~/utils/animateValues";

interface HalfHalfSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const HalfHalfSection: React.FC<HalfHalfSectionProps> = ({
  leftContent,
  rightContent,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <Container>
      <Row className="align-items-center justify-content-around">
        <Col xs={12} md={6} className="d-flex ">
          <motion.div
            {...animationValues({
              ref: ref,
              inView,
              fromLeft: true,
            })}
          >
            {leftContent}
          </motion.div>
        </Col>
        <Col xs={12} md={6} className="d-flex ">
          <motion.div
            {...animationValues({
              ref: ref,
              inView,
              fromRight: true,
            })}
          >
            {rightContent}
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default HalfHalfSection;
