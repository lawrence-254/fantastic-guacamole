import React from "react";
import "./error.css";

function Error() {
  return (
    <div className="errorMainContainer">
      <h1 className="errorTitle">404</h1>
      <h2 className="errorSubtitle">
        OOPS! Page you're looking for doesn't exist. Please use search for help
      </h2>
    </div>
  );
}

export default Error;
