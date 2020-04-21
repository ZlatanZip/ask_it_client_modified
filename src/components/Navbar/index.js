import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Nav, Navbar, Form, Button, FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";

import "./style.css";
import FadeInDown from "../../animations/FadeInDown";

import Forms from "../Forms";
import resources from "../../constants/static_resources";

const NavBar = (props) => {
  const {onLogout, role} = props;
  //const role = useSelector((state) => state.users.userInfo.role);
  console.log(role);
  //  let role = "Member";
  /*  const [showForm, setShowForm] = useState({show: false, typeOfForm: ""});

  const toggleThroughForms = (bool, type, formType) => {
    if (formType === "" && showForm.show == false) {
      setShowForm({show: !bool, typeOfForm: type});
    } else if (formType === type) {
      setShowForm({show: !showForm.show, typeOfForm: ""});
    } else if (formType !== type) {
      setShowForm({show: showForm.show, typeOfForm: type});
    } else {
      setShowForm({show: bool, typeOfForm: type});
    }
  };

  const FormFadeInAndOut = (form_data) => {
    if (showForm.show == true) {
      return (
        <FadeInDown>
          <Forms
            toggleThroughForms={toggleThroughForms}
            showForm={showForm}
            logInForm={form_data.log_in_form}
            signUpForm={form_data.sign_up_form}
          />
        </FadeInDown>
      );
    }  else if (showForm.show == false && showForm.typeOfForm == type) {
          return (<FadeOutRight><Forms toggleThroughForms={toggleThroughForms} showForm={showForm} /></FadeOutRight>)
      }else {
      return null;
    }
  };*/

  return (
    <div>
      <Navbar className='navbar_layout' variant='dark' expand='lg'>
        <Navbar.Brand href='/'>
          <h4>ASK.IT</h4>
        </Navbar.Brand>

        <Navbar.Toggle
          className='hamburger_menu'
          aria-controls='basic-navbar-nav'
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto navbar_links_wrapper'>
            <Nav.Link href='/'>Home</Nav.Link>
            {role === "Member" && (
              <span className='navbar_member_links'>
                <Nav.Link href='/my_questions'>My Questions</Nav.Link>
                <Nav.Link href='/profile'>Profile</Nav.Link>
              </span>
            )}
          </Nav>
          {role !== "Member" ? (
            <div>
              <button className='navbar_buttons login_button_color'>
                <Link to='/login'>Login</Link>
              </button>
              <button className='navbar_buttons sign_up_button_color'>
                <Link to='/register'>Register</Link>
              </button>
            </div>
          ) : (
            <button
              onClick={onLogout}
              className='navbar_buttons sign_up_button_color'
            >
              <Link to='/register'>Logout</Link>
            </button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
