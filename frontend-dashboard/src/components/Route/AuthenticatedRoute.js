import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: C, props: init, ...rest }) =>
  <Route
    {...rest}
    render={props =>
        init.isAuthenticated
        ? <C {...props} {...init} />
        : <Redirect
            to={`/login`}
          />}
  />;
