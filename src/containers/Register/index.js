import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "react-bootstrap";
import validator from "validator";
import {register} from "../../store/actions/users";
import Card from "../../components/UI/Card";

const Register = (props) => {
  const {history, token} = props;
  const [registerFields, setRegisterFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      history.push({pathname: "/my_questions"});
    }
  }, [token, history]);

  const registerHandler = async (event) => {
    event.preventDefault();
    if (!registerFields.firstName) {
      setError({...error, firstName: "First name can not be empty"});
    } else if (!registerFields.lastName) {
      setError({
        ...error,
        firstName: null,
        lastName: "Last name can not be empty",
      });
    } else if (!registerFields.password) {
      setError({
        ...error,
        firstName: null,
        lastName: null,
        password: "Password can not be empty",
      });
    } else if (registerFields.password.length < 6) {
      setError({
        ...error,
        firstName: null,
        lastName: null,
        password: "Password must be at least six characters long",
      });
    } else if (!registerFields.email) {
      setError({
        firstName: null,
        lastName: null,
        password: null,
        email: "Email can not be empty",
      });
    } else if (
      registerFields.email &&
      !validator.isEmail(registerFields.email)
    ) {
      setError({
        firstName: null,
        lastName: null,
        password: null,
        email: "Email format not ok",
      });
    } else {
      await dispatch(register(registerFields));

      history.push({pathname: "/my_questions"});
      window.location.reload(false);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    setRegisterFields({...registerFields, [name]: e.target.value});
  };
  console.log(registerFields);
  return (
    <Card biggerTitle='Register' title='Thank you for the contributions'>
      <Container>
        <button onClick={() => console.log(registerFields)}></button>
        <div className='FormCenter'>
          <form className='FormFields'>
            <div className='FormField'>
              <label className='FormField__Label' htmlFor='name'>
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                className='FormField__Input'
                placeholder='Enter your first name'
                name='firstName'
                value={registerFields.firstName}
                onChange={onChange}
              />
              {error.firstName && <p>{error.firstName}</p>}
            </div>

            <div className='FormField'>
              <label className='FormField__Label' htmlFor='name'>
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                className='FormField__Input'
                placeholder='Enter your last name'
                name='lastName'
                value={registerFields.lastName}
                onChange={onChange}
              />
              {error.lastName && <p>{error.lastName}</p>}
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
                value={registerFields.password}
                onChange={onChange}
              />
              {error.password && <p>{error.password}</p>}
            </div>

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
                value={registerFields.email}
                onChange={onChange}
              />
              {error.email && <p>{error.email}</p>}
            </div>
            <button
              className='navbar_buttons sign_up_button_color'
              onClick={registerHandler}
            >
              Register
            </button>
          </form>
        </div>
      </Container>
    </Card>
  );
};

export default Register;
