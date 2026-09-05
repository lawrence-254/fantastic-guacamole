import "./titleBreadcrumb.css";
import BreadCrumbIcon from "../../../../assets/post/breadCrumbs/v6-icon.png";

function TitleBreadcrumb({ pageInfo, postTitle }) {
  return (
    <div className="TitleBreadCrumbContainer">
      <h1 className="TitleBreadCrumbHeader">
        <span className="TitleBreadCrumbTitle">Home</span>
        <span>
          <img className="TitleBreadCrumbIcon" src={BreadCrumbIcon} />
        </span>
        <span className="TitleBreadCrumbPageInfo">{pageInfo}</span>

        {postTitle && (
          <>
            <span>
              <img className="TitleBreadCrumbIcon" src={BreadCrumbIcon} />
            </span>
            <span className="TitleBreadCrumbPostTitle">{postTitle}</span>
          </>
        )}
      </h1>
    </div>
  );
}

export default TitleBreadcrumb;
