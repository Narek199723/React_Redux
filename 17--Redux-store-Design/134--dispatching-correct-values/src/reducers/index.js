import { combineReducers } from "redux";
import { PostsReducer } from "./postsReducer";

export default combineReducers({
  posts: PostsReducer,
});
