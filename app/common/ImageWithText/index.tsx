import React from "react";
import { Image } from "react-bootstrap";

interface ImageWithTextProps {
  src: string;
  alt: string;
  text: string;
  className?: string;
}
import "./styles.scss"; // Assuming you have a CSS file for styling
const ImageWithText: React.FC<ImageWithTextProps> = ({
  src,
  alt,
  text,
  className,
}) => (
  <figure className={`${className} image-with-text`}>
    <img src={src} alt={alt}/>
    <figcaption className="ms-2 cambria-bold fs-5">{text}</figcaption>
  </figure>
);

export default ImageWithText;
