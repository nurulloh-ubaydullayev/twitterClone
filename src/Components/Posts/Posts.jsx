import "./Posts.scss";

// Components
import CreatePost from "../Create_post/CreatePost";
import OthersPost from "../OthersPosts/OthersPosts";

function Posts() {
  return (
    <>
      <CreatePost />
      <OthersPost />
    </>
  );
}

export default Posts;
