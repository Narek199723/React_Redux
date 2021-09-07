import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

const PostList = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);
  if (props.posts.length === 0) return null;

  console.log(props.posts);
  return <div>Post List</div>;
};
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect( mapStateToProps, { fetchPosts })(PostList);
