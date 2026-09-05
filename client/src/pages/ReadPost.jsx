import Layout from "../components/layout/Layout";
import TitleBreadcrumb from "../components/Post/breadCrumbs/titleBreadcrumbs/TitleBreadcrumb";
import Main from "../components/Post/readSinglePost/Main/Main";

function ReadPost() {
  return (
    <Layout>
      <div className="readSinglePostContainer">
        <TitleBreadcrumb pageInfo={"one"} postTitle={"title"} />
        <Main />
      </div>
    </Layout>
  );
}

export default ReadPost;
