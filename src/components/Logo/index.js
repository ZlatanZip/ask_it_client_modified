import React from "react";
import {NavLink} from "react-router-dom";

import ask_it_logo from "../../assets/icons/ask_it_icon.png";

import "./style.css";

const Logo = (props) => {
  return (
    <div className='logo'>
      <NavLink to='/'>
        ASK.
        <img style={{height: "25%", width: "35%"}} src={ask_it_logo} alt='' />!
      </NavLink>
    </div>
  );
};

export default Logo;
