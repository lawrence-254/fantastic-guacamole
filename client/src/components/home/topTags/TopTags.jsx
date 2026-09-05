import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Arrow from "../../../assets/Home/toptags/Arrow.svg";
import "./topTags.css";

function TopTags({ hashTags }) {
  const tagsRef = useRef(null);

  const scrollTags = (direction) => {
    if (tagsRef.current) {
      const scrollAmount = window.innerWidth * 0.1;
      tagsRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="topTagsContainer">
      <div className="tags" ref={tagsRef}>
        {hashTags.map((tag, index) => (
          <HashTags key={index} title={tag.title} imgUrl={tag.imgUrl} />
        ))}
      </div>
      <div className="arrowContainer" onClick={() => scrollTags("right")}>
        <img src={Arrow} />
      </div>
    </div>
  );
}

export default TopTags;
const HashTags = ({ imgUrl, title }) => {
  return (
    <Link
      to={`/category/${title.toLowerCase()}`}
      className="nonStyledList hashtagContainer"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <h5 className="hasTag">#{title}</h5>
    </Link>
  );
};
