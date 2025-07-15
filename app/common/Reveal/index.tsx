import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type RevealConfig = {
  fromLeft?: boolean;
  fromRight?: boolean;
  fromBottom?: boolean;
  fromUp?: boolean;
  popIn?: boolean;
  delay?: number;
};

type RevealProps = React.PropsWithChildren<{
  config: RevealConfig;
  className?: string;
}>;

const Reveal: React.FC<RevealProps> = ({ children, config, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const {
    fromLeft,
    fromRight,
    fromBottom,
    popIn,
    fromUp,
    delay = 0.2,
  } = config;
  const x = fromLeft ? -200 : fromRight ? 200 : 0;
  const y = fromBottom ? 100 : fromUp ? -100 : 0;
  const scale = popIn ? 0.5 : 1;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y, scale }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{
        duration: 1,
        // ease: [0, 0.71, 0.1, 1.01] as [number, number, number, number], // 👈 cast to satisfy TS
        ease: "easeInOut", // 👈 cast to satisfy TS
        delay: delay, // Adjust delay as needed
      }}
      style={{ willChange: "opacity, transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
