import React from "react";
import {Route, Redirect} from "react-router-dom"
import isLoggedIn from "../pages/Login"

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return(
        <Route {...rest} render={props => (
            isLoggedIn && restricted ? <Redirect to="/home" /> : <Component {...props} />
        )} />
    )
}

export default PublicRoute;