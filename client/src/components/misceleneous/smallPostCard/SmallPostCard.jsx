import React from "react";

import BookmarkIcon from "../../../assets/bookmarkIcon.svg";

import "./smallPostCard.css";

function SmallPostCard({
  postImage,
  postTitle,
  postContent,
  postAuthor = { authorName, authorAvi },
  postDate,
}) {
  return (
    <div className="smallPostCardContainer">
      <div className="smallPostCardImage">
        <img src={postImage} />
      </div>
      <div className="smallPostCardContent">
        <div className="smallPostCardContentTitle">
          {postTitle.length > 35
            ? `${postTitle.slice(0, 35)}...`
            : postTitle && postTitle.charAt(0).toUpperCase + postTitle.slice(1)}
        </div>
        <div className="smallPostCardContentPostContent">
          {postContent.length > 70
            ? `${postContent.slice(0, 70)}...`
            : postContent &&
              postContent.charAt(0).toUpperCase() + postContent.slice(1)}
        </div>
        <div className="smallPostCardFooter">
          <img className="smallPostCardFooterLeft" src={postAuthor.authorAvi} />
          <div className="smallPostCardFooterMiddle">
            <p className="smallPostCardFooterMiddleHeader">
              {postAuthor.authorName}
            </p>
            <p className="smallPostCardFooterMiddleSubHeader">{postDate}</p>
          </div>
          <img className="smallPostCardFooterRight" src={BookmarkIcon} />
        </div>
      </div>
    </div>
  );
}

export default SmallPostCard;
