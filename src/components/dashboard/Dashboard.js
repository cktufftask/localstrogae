import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Users from "./Users";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const Dashboard = () => {
 
  return (
    <div className="container">
      <div className="row force-to-bottom ">
        <div className="col-sm-4">
          <NavLink  activeClassName="active" to="/users">Users </NavLink>
        </div>
        <div className="col-sm-4">
          <NavLink activeClassName="active" to="/tab1">Tab1 </NavLink>
        </div>
        <div className="col-sm-4">
          <NavLink activeClassName="active" to="/tab2">Tab2 </NavLink>
        </div>
      </div>
      <Switch>
        <PrivateRoute exact={true} path="/users" component={Users} />
        <PrivateRoute exact={true} path="/tab1" component={Tab1} />
        <PrivateRoute exact={true} path="/tab2" component={Tab2} />
        <Route path="/error" component={Error} />
      </Switch>
    </div>
  );
};

export default Dashboard;
