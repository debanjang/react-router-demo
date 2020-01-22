import React from "react";
import { Link, Route } from "react-router-dom";
import MenuDetail from "./MenuDetail";

const Menu = props => {
  console.log(props);
  return (
    <div>
      <h1>Menu</h1>

      <hr />
      <Link to={`${props.match.url}/1`}> Menu Details 1 </Link>
      <Route path={`${props.match.url}/:detailId`} component={MenuDetail} />
    </div>
  );
};

export default Menu;
