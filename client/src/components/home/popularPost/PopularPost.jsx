import React from "react";

import SmallPostCard from "../../misceleneous/smallPostCard/SmallPostCard";

import RightArrow from "../../../assets/Home/popularPost/rightArrow.svg";
import LeftArrow from "../../../assets/Home/popularPost/leftArrow.svg";

function PopularPost({ postItems }) {
  return (
    <div className="postAreaContainer">
      <div className="postAreaTitle">
        <div className="postTitleContainer">
          <div className="redVerticalRectangle"></div>Popular Post
        </div>
        <div className="postNavigationArea">
          <button className="postNavigationButton">
            <img src={LeftArrow} />
          </button>
          <button className="postNavigationButton">
            <img src={RightArrow} />
          </button>
        </div>
      </div>
      <div className="postCarousel">
        {postItems.map((item, index) => (
          <SmallPostCard
            key={index}
            postImage={item.postImage}
            postTitle={item.postTitle}
            postContent={item.postContent}
            postAuthor={item.postAuthor}
            postDate={item.postDate}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularPost;
