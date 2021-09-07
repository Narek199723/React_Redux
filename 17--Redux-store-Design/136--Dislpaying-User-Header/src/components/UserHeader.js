import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = (props) => {
  useEffect(() => {
    props.fetchUser(props.userId);
  });

  return <div>User Header</div>;
};

export default connect(null, { fetchUser })(UserHeader);
