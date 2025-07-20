import React from "react";
const tagListDefault = [
  {
    key: "all",
    label: "All",
    active: true,
  },
  {
    key: "press",
    label: "Press",
    active: false,
  },
  {
    key: "social",
    label: "Social",
    active: false,
  },
  {
    key: "facts",
    label: "Facts",
    active: false,
  },
];

const Tags = ({
  tagList = tagListDefault,
}: {
  tagList?: Array<any>;
}) => {
  return (
    <div className="d-flex gap-3 flex-wrap">
      {tagList.map((tag) => (
        <span
          role="button"
          className={`badge rounded-pill text-wight fs-6 fw-normal  border-dark-blue px-3 ${
            tag.active ? "dark-blue-bg" : "text-dark-blue"
          }`}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
};

export default Tags;
