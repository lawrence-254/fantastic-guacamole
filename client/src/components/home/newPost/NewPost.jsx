import React from "react";
import "./newPost.css";

import LargePostCard from "../../misceleneous/largePostCard/LargePostCard";

function NewPost({ postItems }) {
  return (
    <div className="newPostContainer">
      <div className="newPostAreaTitle">
        <div className="postTitleContainer">
          <div className="redVerticalRectangle"></div>New Posts
        </div>
        <div className="postNavigationArea showButton">
          <button
            style={{
              width: "119px",
              height: "40px",
              gap: "8px",
              borderRadius: "12px",
            }}
          >
            Show all
          </button>
        </div>
      </div>
      <div className="newPostCarousel">
        {postItems.map(
          (item, index) =>
            item && (
              <LargePostCard
                key={index}
                postImage={item.postImage}
                postTitle={item.postTitle}
                postContent={item.postContent}
                postAuthor={item.postAuthor}
                postDate={item.postDate}
              />
            )
        )}
      </div>
    </div>
  );
}

export default NewPost;
