import React from "react";
import "./breadCrumb.css";

import rightArrowIcon from "../../../assets/breadcrumb/rightArrowIcon.svg";

const BreadCrumb = ({ pageInfo, postTitle }) => {
  return (
    <div className="breadCrumbContainer">
      <h1 className="breadCrumbHeader">
        <span className="breadCrumbTitle">Home</span>
        <span>
          <img className="breadCrumbIcon" src={rightArrowIcon} />
        </span>
        <span className="breadCrumbPageInfo">{pageInfo}</span>

        {postTitle && (
          <>
            <span>
              <img className="breadCrumbIcon" src={rightArrowIcon} />
            </span>
            <span className="breadCrumbPostTitle">{postTitle}</span>
          </>
        )}
      </h1>
    </div>
  );
};

export default BreadCrumb;
