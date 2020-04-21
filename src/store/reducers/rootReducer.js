import {combineReducers} from "redux";

import questionsReducer from "./questions";
import usersReducer from "./users";

const rootReducer = combineReducers({
  questions: questionsReducer,
  users: usersReducer,
});

export default rootReducer;
