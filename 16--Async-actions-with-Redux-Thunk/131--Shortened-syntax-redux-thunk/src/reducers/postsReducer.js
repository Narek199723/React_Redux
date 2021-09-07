import axios from "axios";

export const postsReducer = (state, action) => {
  // * When the first time our app is loaded our state is undefined here so it is better to use state=[] so it won't show an undefined
  // & bad code
  // return axios.get('/posts')
  // & bad code
  // return document.querySelector('input')
  // & good code
  // & We should keep our reducer Pure ,so with a pure reducer we are only going to return values that use their its input arguments( state or action )
  // return state + action
  // !  Must not mutate its input 'state' argument
  // !  So we should not mutate the state like this
  // state.name = "Same";
  // state.age = 20;
};


// ^ So inside a JS strings and numbers are immutable values , we can't change them , but we can easily change the array or object 