import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route render={(props) => (
      (rest.auth)
        ? <Component {...props} {...rest} />
        : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
    )} {...rest} /> 
  )
};

export default PrivateRoute;
