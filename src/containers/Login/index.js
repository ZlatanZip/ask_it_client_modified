import React, {useState, useEffect, useReducer, useCallback} from "react";
import {Alert} from "react-bootstrap";
import {Redirect} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import validator from "validator";
import {Container} from "react-bootstrap";

import {login} from "../../store/actions/users";
import Card from "../../components/UI/Card";
import CustomInput from "../../components/CustomInput";

/* const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
}; */

const Login = (props) => {
  const {history, token} = props;

  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });

  //const token = useSelector((state) => state.users.userInfo.token);
  //console.log(token);
  const [error, setError] = useState({
    email: null,
    password: null,
  });

  const dispatch = useDispatch();

  const loginHandler = useCallback(
    async (e) => {
      e.preventDefault();
      if (!loginFields.password) {
        setError({
          ...error,
          password: "Password can not be empty",
        });
      } else if (loginFields.password.length < 6) {
        setError({
          ...error,
          password: "Password must be at least six characters long",
        });
      } else if (!loginFields.email) {
        setError({
          password: null,
          email: "Email can not be empty",
        });
      } else if (loginFields.email && !validator.isEmail(loginFields.email)) {
        setError({
          password: null,
          email: "Email format not ok",
        });
      } else {
        await dispatch(login(loginFields.email, loginFields.password));
        history.push({pathname: "/my_questions"});
        window.location.reload(false);
      }
    },
    [dispatch, error, loginFields]
  );

  useEffect(() => {
    if (token) {
      loginHandler();
    }
  }, [loginHandler, token, history]);

  const onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    setLoginFields({...loginFields, [name]: e.target.value});
  };
  return (
    <Card biggerTitle='Login' title='Thanks for being with us'>
      <Container>
        <div className='FormCenter'>
          <form className='FormFields' onSubmit={loginHandler}>
            <div className='FormField'>
              <label className='FormField__Label' htmlFor='email'>
                E-Mail Adress
              </label>
              <input
                type='text'
                id='email'
                className='FormField__Input'
                placeholder='Enter your email'
                name='email'
                value={loginFields.email}
                onChange={onChange}
              />
              <div className='FormField'>
                <small className='danger-error'></small>
              </div>
            </div>

            <div className='FormField'>
              <label className='FormField__Label' htmlFor='name'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='FormField__Input'
                placeholder='Enter your password'
                name='password'
                value={loginFields.password}
                onChange={onChange}
              />
              <div className='FormField'>
                <small className='danger-error'></small>
              </div>
              {/*   <CustomInput
                label='E-Mail Address'
                type='text'
                id='email'
                name="email"
                placeholder='Please edit your email'
                // errorText='Please enter a valid email address.'
                onInputChange={inputChangeHandler}
              />

              <CustomInput
                label='Password'
                id='password'
                type='password'
                placeholder='Please edit your password'
                // errorText='Please enter a valid password.'
                onInputChange={inputChangeHandler}
              /> */}

              <button className='navbar_buttons login_button_color'>
                Log In
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Card>
  );
};

export default Login;
