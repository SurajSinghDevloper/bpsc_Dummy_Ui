import React from "react";
import { Route, Link } from "react-router-dom";
import { getCookie } from "../Configuration/Cookies";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = getCookie("token"); // Get the token from the cookie

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props.children} />;
        } else {
          return <Link to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;