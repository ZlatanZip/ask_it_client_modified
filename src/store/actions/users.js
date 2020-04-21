import setAuthorizationHeader from "../../helpers/setAuthorizationheader";
import {
  handleRegistration,
  login as handleLogin,
  getUsersWithMostAnswers,
  getUserData,
} from "../../lib/users";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
export const SET_USER = "SET_USER";
export const SET_USERS = "SET_USERS";
export const SET_ADMINS = "SET_ADMINS";
export const SET_USERS_QUESTIONS = "SET_USERS_QUESTIONS";

export const authenticate = (userId, token, expiryTime) => {
  return (dispatch) => {
    dispatch({type: AUTHENTICATE, userId: userId, token: token});
  };
};

export const register = (data) => {
  return async (dispatch) => {
    try {
      const registerData = await handleRegistration(data);
      const token = `Bearer ${registerData.data.token}`;

      setAuthorizationHeader(token);
      dispatch({
        type: SIGNUP,
        userInfo: registerData.data,
      });
      saveDataToStorage(
        registerData.data.token,
        registerData.data.userId,
        registerData.data.role
      );
    } catch (err) {
      // do something with message!
      console.log(err.response);
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const loginData = await handleLogin(email, password);
      const token = `Bearer ${loginData.data.token}`;
      console.log(loginData);
      setAuthorizationHeader(token);
      dispatch({
        type: LOGIN,
        userInfo: loginData.data,
      });
      saveDataToStorage(
        loginData.data.token,
        loginData.data.userId,
        loginData.data.role
      );
    } catch (err) {
      // do something with message!
      console.log(err.response);
    }
  };
};

export const getUsers = () => {
  return async (dispatch, getState) => {
    try {
      const usersWithMostAnswers = await getUsersWithMostAnswers();
      dispatch({
        type: SET_USERS,
        users: usersWithMostAnswers.data,
      });
    } catch (err) {
      // do something with message!
      console.log(err.response);
    }
  };
};

export const getUsersData = () => {
  return async (dispatch, getState) => {
    try {
      const resData = await getUserData();
      console.log(resData);
      dispatch({
        type: SET_USER,
        userData: resData.data,
      });
    } catch (err) {
      // do something with message!
      console.log(err.response);
    }
  };
};
/* export const resetPassword = (password, newPassword) => {
  return async () => {
    try {
      const userData = await localStorage.getItem("userData");
      let data = JSON.parse(userData);
      const response = await fetch(
        `${URL}${PORT}/api/users/${data.userId}/changePassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + data.token,
          },
          body: JSON.stringify({
            password,
            newPassword,
          }),
        }
      );

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.errorMsg);
      } else {
        throw new Error(resData.successMessage);
      }
    } catch (error) {
      //sending error to my analytical server
      throw error;
    }
  };
};
 */

/* export const logout = () => {
  console.log("heloo logout");
  //clearLogoutTimer();
  localStorage.removeItem("userData");
  return {type: LOGOUT};
}; */

export const logout = () => {
  return async (dispatch, getState) => {
    setAuthorizationHeader();
    localStorage.removeItem("userData");
    dispatch({
      type: LOGOUT,
    });

    // do something with message!
  };
};

const saveDataToStorage = (token, userId, role) => {
  localStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      userId: userId,
      role: role,
    })
  );
};

/* export const addUser = (
  firstName,
  lastName,
  email,
  password,
  reviewersList
) => {
  return async () => {
    try {
      const userData = await localStorage.getItem("userData");
      let data = JSON.parse(userData);
      const response = await fetch(`${URL}${PORT}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.token,
        },
        body: JSON.stringify({
          firstName,
          lastName,
          password,
          email,
          reviewersList,
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.errorMsg);
      } else {
        throw new Error(resData.successMessage);
      }
    } catch (error) {
      //sending error to my analytical server
      throw error;
    }
  };
};
 */
