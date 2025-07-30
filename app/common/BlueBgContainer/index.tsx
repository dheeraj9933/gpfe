import React from "react";

interface BlueBgWithGreyStripCardProps {
  children: React.ReactNode;
  className?: string;
}

function BlueBgContainer({
  children,
  className = "",
}: BlueBgWithGreyStripCardProps) {
  return (
    <div className={`position-relative py-5 dark-blue-bg ${className}`}>
      <div className=" px-md-5">{children}</div>

      {/* Top Right Image */}
      <img
        src={"/common/right_corner_strip.svg"}
        className="position-absolute top-0 end-0"
        style={{ height: "180px" }}
        alt=""
      />

      {/* Bottom Left Image (flipped) */}
      <img
        src={"/common/right_corner_strip.svg"}
        className="position-absolute bottom-0 start-0"
        style={{ height: "180px", transform: "scaleX(-1) scaleY(-1)" }}
        alt=""
      />
    </div>
  );
}

export default BlueBgContainer;
