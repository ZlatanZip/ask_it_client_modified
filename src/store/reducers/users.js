import {
  SIGNUP,
  LOGIN,
  AUTHENTICATE,
  LOGOUT,
  SET_USER,
  SET_USERS,
} from "../actions/users";

const initialState = {
  users: [],
  userInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {...state, userInfo: action.userInfo};
    case LOGOUT:
      return {...state, userInfo: null};
    case LOGIN:
      return {...state, userInfo: action.userInfo};
    case SIGNUP:
      return {...state, userInfo: action.userInfo};
    case SET_USER:
      return {
        ...state,
        userInfo: action.userData,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};
