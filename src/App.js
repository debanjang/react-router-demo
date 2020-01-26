import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Menu from "./Menu";
import NoMatch from "./NoMatch";
//import MenuDetail from "./MenuDetail";

const HomePage = props => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push("/topics")}>Topics </button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = props => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <h3>
        <i>
          This page has no nested routes. Topic Details are seperate routes and
          as such are rendered independently.
        </i>
      </h3>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>
      <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
    </div>
  );
};

const TopicDetail = props => {
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blog/asdqw/topics" component={TopicsList} />
        <Route path="/blog/asdqw/topics/:topicId" component={TopicDetail} />
        <Route exact path="/blog/topics" component={TopicsList} />
        <Route path="/blog/topics/:topicId" component={TopicDetail} />
        <Route path="/menu" component={Menu} />
        <Route component={NoMatch} />
      </Switch>
      {/*<Route exact path="/menu/:detailId" component={MenuDetail} />*/}
      <Link to="/blog/asdqw/topics"> Topics </Link>
      <Link to="/menu"> Menu </Link>
    </div>
  );
}

export default App;
