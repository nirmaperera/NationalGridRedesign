import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const isLogged = JSON.parse(window.localStorage.getItem('state'));
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isLogged.isLogged ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/"

                        }}
                    />
                )
        }
    />
);
