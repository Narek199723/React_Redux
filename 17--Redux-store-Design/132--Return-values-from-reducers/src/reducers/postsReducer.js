export default () => {
  return undefined;

  
};
// & if we are going to change a state inside of our reducer redux is not going to notify whole of our application that state hasa changed so that's why we never should mutate state inside a reducer
// * So we should never mutate our state inside a reducer, even never return a state argument it won't rerun our application so there will be a logical error 
