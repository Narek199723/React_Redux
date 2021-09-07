import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};

// & Action creators must return plain JS objects with a type property- we are not
// *  even if we are writing here in the function code which returns a JS ut the errors says that we must return plain JS, the problem is that the code that we write it is getting transformed to a ES5 syntax, so the problem occurs there, so the error is understandable

// & By the time our action gets to a reducer, we won't have fetched our data
// *  just because our redux is working very fast it is not having a data by the time it get's called so problem is that because it needs time to fetch data but because it happens so fast there is no data as well

// ^  If we ever want to use asynchronous action creator we need to install a middleware and that kind of middleware is the redux-thunk

// & Middleware in Redux
// *  Function that gets called with every action we dispatch
// *  Has the ability to STOP,MODIFY with every action we dispatch
// *  Tons of open source middleware exist
// *  Most popular use of middleware is for dealing with async actions
// *  We are going to use Redux thunk to solve our async issues

// &  Redux action creator rules (Vanilla Redux)
// *  Action creators must return action objects
// *  Actions must have a type property
// *  Actions can optionally have a 'payload'

// &  Redux action creator with Redux Thunk rules
// * action creators can return objects or Action creators can return functions
// * if an action object gets returned, it must have a type
// * If an action object gets returned , it can optionally have a payload

// ^ With redux-thunk we can manually call dispatch function in some point of time in the future
// ^  S what happens when we use redux thunk and problem is solving is this
// * when we call dispatch it goes another cycle and checks whether is it a function or plain object and when it finds out that it is a function it sends it to another cycle where it waits for request to finish and then we manually dispatch an action and right after that it goes for another cycle and by that time it is returning a plain object that's why afterwards it executes it easily with any errors
