import React from "react";

import BookmarkIcon from "../../../assets/bookmarkIcon.svg";

import "./largePostCard.css";

function LargePostCard({
  postImage = "",
  postTitle = "h",
  postContent = "t",
  postAuthor = { authorName: "", authorAvi: "" },
  postDate = "",
}) {
  return (
    <div className="largePostCardContainer">
      <div className="largePostCardImage">
        <img src={postImage} />
      </div>
      <div className="largePostCardContent">
        <div className="largePostCardContentTitle">
          {postTitle.length > 39
            ? `${postTitle.slice(0, 39)}...`
            : postTitle && postTitle.charAt(0).toUpperCase + postTitle.slice(1)}
        </div>
        <div className="largePostCardContentPostContent">
          {postContent.length > 75
            ? `${postContent.slice(0, 75)}...`
            : postContent &&
              postContent.charAt(0).toUpperCase() + postContent.slice(1)}
        </div>
        <div className="largePostCardFooter">
          <img className="largePostCardFooterLeft" src={postAuthor.authorAvi} />
          <div className="largePostCardFooterMiddle">
            <p className="largePostCardFooterMiddleHeader">
              {postAuthor.authorName}
            </p>
            <p className="largePostCardFooterMiddleSubHeader">{postDate}</p>
          </div>
          <img className="largePostCardFooterRight" src={BookmarkIcon} />
        </div>
      </div>
    </div>
  );
}

export default LargePostCard;
