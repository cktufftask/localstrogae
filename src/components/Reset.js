import React from "react";
import { NavLink } from "react-router-dom";

const Reset = () => {
  return (
    <>
      <div className="wrapper fadeInDown">
      <div id="formContent">
       <p  className="heading forgotheading">
       <NavLink to="/login" >
           <a href="#" >Forgot Password </a>
      </NavLink>
        </p> 
      <form>
        <input
          type="text"
          id="login"
          className="fadeIn second"
          name="email"
          placeholder="Email"
        />
        <button  className="fadeIn fourth"  >Reset</button>
      </form>
      </div>
      </div>
    </>
  );
};

export default Reset;
