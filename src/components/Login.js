import React from "react";
import { NavLink } from "react-router-dom";
import {reactLocalStorage} from "reactjs-localstorage";
import { useHistory } from "react-router-dom";


const Login = () => {
    const [email, setEmail]=React.useState('');
    const [password, setPassword]=React.useState('');
    const isLogin= reactLocalStorage.getObject('useref').login;
    const history =useHistory();
    const onSubmitHandler=(e)=>{
        let useref={
            email:email,
            token:"234234234234234234",
            login :true
        }
        reactLocalStorage.setObject('useref',useref);
        reactLocalStorage.set('page',0);
        history.push('/dashboard');
        return false;

    }


  return (
    <>
    {!isLogin &&   <div className="wrapper fadeInDown">
      <div id="formContent">
       <label className="heading">Login</label> 
      <form  onSubmit={onSubmitHandler}>
        <input
          type="email"
          id="login"
          className="fadeIn second"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required="Required"

        />
        <input
          
          type="password"
          id="password"
          className="fadeIn third"
          name="login"
          placeholder="password"
          value={password}
          required="Required"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <p className="forgot">
        <NavLink to="/reset" >
      
            Forgot Password 
        </NavLink>
            </p>
            
        <button  className="fadeIn fourth" >Login</button>
      </form>
      </div>
      </div>}
    </>
  );
};

export default Login;
