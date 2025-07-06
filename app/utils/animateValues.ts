import type { MotionProps } from "framer-motion";
interface AnimationConfig {
  ref: (node?: Element | null) => void;
  inView: boolean;
  fromLeft?: boolean;
  fromRight?: boolean;
  fromBottom?: boolean;
  popIn?: boolean;
  fromUp?: boolean;
  delay?: string | number;
}
interface AnimationValues extends MotionProps {
  ref: (node?: Element | null) => void;
}
export const animationValues = (config: AnimationConfig): AnimationValues => {
  const { ref, inView, fromLeft , fromRight , fromBottom, popIn, fromUp, delay = 0.2 } = config;
  const x = fromLeft ? -200 : fromRight ? 200 : 0;
  const y = fromBottom ? 100 : fromUp ? -100 : 0;
  const scale = popIn ? 0.5 : 1;

  return {
    ref,
    initial: { opacity: 0, x, y, scale },
    animate: inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {},
    transition: {
      duration: 1,
      // ease: [0, 0.71, 0.1, 1.01] as [number, number, number, number], // 👈 cast to satisfy TS
      ease: "easeInOut", // 👈 cast to satisfy TS
      delay: delay, // Adjust delay as needed
    },
    // style: { willChange: "opacity, transform" },
  } as AnimationValues;
};
