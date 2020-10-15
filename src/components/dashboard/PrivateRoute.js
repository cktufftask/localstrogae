import React from "react";
import { Route, Redirect } from "react-router-dom";
import {reactLocalStorage} from "reactjs-localstorage";

const PrivateRoute = ({ component: Component, handleChildFunc, ...rest }) => {
    const user =  reactLocalStorage.getObject('useref').login;
    return <Route {...rest} render={(props) => (
        user !== null
            ? <Component {...props} user={user} handleChildFunc={handleChildFunc}/>
            : <Redirect to='/login' />
        )} 
    />
}

export default PrivateRoute;