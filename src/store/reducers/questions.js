import {
  SET_USER_QUESTIONS,
  SET_ALL_QUESTIONS,
  DELETE_QUESTION,
  ADD_A_QUESTION,
  REVIEW_QUESTION,
  ANSWER_A_QUESTION,
  GET_SINGLE_QUESTION,
} from "../../constants/actionTypes";

const initialState = {
  allQuestions: [],
  userQuestions: [],
  singleQuestionDetails: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_QUESTIONS:
      return {
        ...state,
        allQuestions: action.allQuestions,
      };
    case SET_USER_QUESTIONS:
      return {
        ...state,
        userQuestions: action.userQuestions,
      };
    case GET_SINGLE_QUESTION:
      console.log(action.singleQuestionData);
      return {
        ...state,
        singleQuestionDetails: action.singleQuestionData,
      };
    case ADD_A_QUESTION:
      return {
        ...state,
        userQuestions: state.userQuestions.concat(action.addedQuestion),
        allQuestions: state.allQuestions.concat(action.addedQuestion),
      };
    case DELETE_QUESTION:
      return {
        ...state,
        userQuestions: state.userQuestions.filter(
          (question) => question.id !== action.questionId
        ),
        allQuestions: state.allQuestions.filter(
          (question) => question.id !== action.questionId
        ),
      };
    case REVIEW_QUESTION:
      const questionIndex = state.userQuestions.findIndex(
        (question) => question._id === action.questionId
      );

      const updatedUserQuestions = [...state.userQuestions];
      updatedUserQuestions[questionIndex] = action.updatedQuestion;

      const allQuestionsIndex = state.allQuestions.findIndex(
        (question) => question._id === action.questionId
      );
      const updatedAllQuestions = [...state.allQuestions];
      updatedAllQuestions[allQuestionsIndex] = action.updatedQuestion;
      return {
        ...state,
        allQuestions: updatedAllQuestions,
        userQuestons: updatedUserQuestions,
      };
    case ANSWER_A_QUESTION:
      const questionsIndex = state.userQuestions.findIndex(
        (question) => question._id === action.questionId
      );

      const updatedUsersQuestions = [...state.userQuestions];
      updatedUsersQuestions[questionsIndex] = action.updatedQuestion;

      const allQuestionIndex = state.allQuestions.findIndex(
        (question) => question._id === action.questionId
      );

      const updatedQuestions = [...state.allQuestions];
      updatedAllQuestions[allQuestionIndex] = action.updatedQuestion;
      return {
        ...state,
        allQuestions: updatedQuestions,
        userQuestons: updatedUserQuestions,
      };
    default:
      return {...state};
  }
};
