import React from "react";
import { Link, Route } from "react-router-dom";
import MenuDetail from "./MenuDetail";

const Menu = props => {
  console.log(props);
  return (
    <div>
      <hr />
      <h1>Menu</h1>
      <h3>
        <i>
          This page has a nested route. Click on the link below to find out.
        </i>
      </h3>

      <Link to={`${props.match.url}/1`}> Menu Details 1 </Link>
      <Route path={`${props.match.url}/:detailId`} component={MenuDetail} />
      <hr />
    </div>
  );
};

export default Menu;
