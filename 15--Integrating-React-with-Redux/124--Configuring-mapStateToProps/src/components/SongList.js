import React from "react";
import { connect } from "react-redux";

const SongList = (props) => {
  // ^ if we will look inside a console.log, we would see a dispatch function in there
  // & So whenever we would want to change data inside of our application we can make use of this dispatch function 
  console.log(props);
  return <div>SongList</div>;
};
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// ^ The connect function is a React component, we are passing some configuration into it, and telling it that we want to get list of songs out of our redux store
// ^ so any time list of songs inside of our store changes the provider is going to notify our connect function about it, and then connect function is going to pass our list of songs down to our songList component

export default connect(mapStateToProps)(SongList);
