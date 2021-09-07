import jsonPlaceholder from '../apis/jsonPlaceholder';


// & Error: Actions must be plain objects. 
// ^  This error will occur, so we have to use redux-thunk 
// *  Redux thunk is middleware to help us make requests in a redux application 
export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: response,
  };
};
