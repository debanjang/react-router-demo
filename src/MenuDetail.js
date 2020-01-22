import React from "react";

const MenuDetail = props => {
  console.log(props);
  return <h1>Menu Detail {props.match.params.detailId}</h1>;
};

export default MenuDetail;
