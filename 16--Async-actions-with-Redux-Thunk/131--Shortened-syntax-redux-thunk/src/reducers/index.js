import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

export default combineReducers({
  posts: postsReducer,
});

// & Rules of Reducers 
// ^  Must Return any value besides 'undefined
// * So it can return anything except undefined 
// ^  Produces 'state', or data to be used inside of your app using only previous state and the action (reducers are pure)
// * new state will be related with the previous state 
// ^  Must not return reach 'out of itself' to decide what value to return 
// ^  Must not mutate its input 'state' argument 