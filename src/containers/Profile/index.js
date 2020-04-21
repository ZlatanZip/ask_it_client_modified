import React, {useEffect, useState, useCallback} from "react";
import {Container, Button} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";

import {getUsersData} from "../../store/actions/users";
import Spinner from "../../components/Spinner";
import Card from "../../components/UI/Card";
import "./style.css";

const Profile = () => {
  const userInfo = useSelector((state) => state.users.userInfo);

  const [updatedFields, setUpdatedFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const getUserDataHandler = async () => {
    try {
      const fetchedData = await dispatch(getUsersData());
      console.log(fetchedData);
    } catch (err) {}
  };

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchUserData().then(() => {
      setIsLoading(false);
    });
  }, []);

  const fetchUserData = useCallback(async () => {
    try {
      await dispatch(getUsersData());
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [dispatch, setError]);

  if (error) {
    return (
      <div className='centered'>
        <h3> The server may temporarily be unavailable!</h3>

        <Button variant='info' onClick={() => fetchUserData}>
          Try Again
        </Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='centered'>
        <Spinner />
      </div>
    );
  }

  if (!isLoading && userInfo === null) {
    return (
      <div className='centered'>
        <h3> No Content found.Try adding some!</h3>
      </div>
    );
  }

  const onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    setUpdatedFields({...updatedFields, [name]: e.target.value});
  };

  return (
    <Card biggerTitle='Profile' title='It is worth being a member'>
      <Container>
        <div className='FormCenter'>
          <form onSubmit={() => {}} className='FormFields'>
            <div className='FormField'>
              <label className='FormField__Label' htmlFor='firstName'>
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                className='FormField__Input'
                placeholder={userInfo.firstName}
                name='firstName'
                // value={userInfo.firstName}
                onChange={() => {}}
              />
            </div>

            <div className='FormField'>
              <label className='FormField__Label' htmlFor='lastName'>
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                className='FormField__Input'
                placeholder={userInfo.lastName}
                name='lastName'
                //value={userInfo.lastName}
                onChange={() => {}}
              />
            </div>
            <div className='FormField'>
              <label className='FormField__Label' htmlFor='password'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='FormField__Input'
                placeholder='Enter your password'
                name='password'
                // value={password}
                // onChange={onPasswordChange}
              />
              <div className='FormField'>
                <small className='danger-error'></small>
              </div>
            </div>

            <div className='FormField'>
              <label className='FormField__Label' htmlFor='email'>
                E-Mail Adress
              </label>
              <input
                type='email'
                id='email'
                className='FormField__Input'
                placeholder={userInfo.email}
                name='email'
                //value={userInfo.email}
                onChange={() => {}}
              />
            </div>
            <div className='FormField'>
              <button
                onClick={() => console.log(userInfo)}
                className='navbar_buttons login_button_color'
              >
                Update My Profile
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Card>
  );
};

export default Profile;
