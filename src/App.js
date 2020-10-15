import React from "react";
import Demo from "./components/Demo";
import Login from "./components/Login";
import Reset from "./components/Reset";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/dashboard/PrivateRoute";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {reactLocalStorage} from "reactjs-localstorage";

import "./App.css";

function App() {
  let history = useHistory();
  const isLogin= reactLocalStorage.getObject('useref').login;
  const [splash, setSplash] = React.useState(true);
  React.useEffect(() => {
    let clearT = setTimeout(() => {
    setSplash(false);
      if(isLogin){
        history.push('/dashboard');
      }else{
        history.push('/login');
      }
    }, 3000);
    return () => {
      clearTimeout(clearT);
    };
  }, []);
    
  return (
    <div className="App">
      {splash && <Demo />}
      {isLogin && <Dashboard/>}
      <Switch>
        <Route  exact={true} path="/login" component={Login} />
        <Route exact={true} path="/reset" component={Reset} />
        <PrivateRoute exact={true} path="/dashboard" component={Dashboard} />
        <Route path="/error" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
