import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Topic } from "./Topic";

export const Topics = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/propsVsState`}>Props Vs. State</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route
          exact
          path={match.path}
          render={() => {
            return <h3>Please Select a Topic</h3>;
          }}
        />
        <Route path={`${match.path}/:topicId`} component={Topic} />
      </Switch>
    </div>
  );
};
