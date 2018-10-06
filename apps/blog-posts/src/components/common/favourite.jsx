import React, { Component } from "react";

const Favourite = props => {
  let classes = "am-pointer fa fa-heart";
  if (!props.favourited) classes += "-o";
  return <i onClick={props.onClick} className={classes} aria-hidden="true" />;
};

export default Favourite;
