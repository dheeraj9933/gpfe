import React from "react";
import { Container, Row } from "react-bootstrap";
import { ArrowDown } from "react-bootstrap-icons";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { animationValues } from "~/utils/animateValues";
import "./styles.scss";

const Banner = ({
  children,
  image,
  className,
}: {
  children: React.ReactNode;
  image: string;
  className?: string;
}) => {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section
      className={`py-5 text-white banner d-flex ${className}`}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <motion.div
          {...animationValues({
            ref: ref,
            inView: true,
            fromRight: true,
          })}
           className="d-flex flex-column h-100"
        >
          {children}
        </motion.div>
      </Container>
      <div className="arrow-container">
        <ArrowDown />
      </div>
    </section>
  );
};

export default Banner;
