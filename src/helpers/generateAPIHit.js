import {
  getSingleQuestionDetails,
  answerQuestion,
  deleteQuestion,
  voteQuestion,
  deleteAAnswer,
  invalidateAQuestion,
} from "../store/actions/questions";

const actionHandler = (questionId, value, typeOfAction) => {
  return async (dispatch) => {
    let action;
    switch (typeOfAction) {
      case "addAQuestion":
        action = answerQuestion(questionId, value);
        break;
      case "updateAQuestion":
        action = answerQuestion(questionId, value);
        break;
      case "deleteAQuestion":
        action = deleteQuestion(questionId, value);
        break;
      case "voteAQuestion":
        action = voteQuestion(questionId, value);
        break;
      case "invalidateAQuestion":
        action = invalidateAQuestion(questionId);
        break;
      case "addAnswer":
        action = answerQuestion(questionId, value);
        break;
      case "updateAnswer":
        action = answerQuestion(questionId, value);
        break;
      case "deleteAnswer":
        console.log("heloo deleted answer");
        action = deleteAAnswer(questionId, value);
        break;
      case "voteAAnswer":
        action = answerQuestion(questionId, value);
        break;
      default:
        return;
    }
    /*     setError(null);
    setIsLoading(true); */

    try {
      await dispatch(action);
    } catch (err) {
      console.log(err.message);
    }
    /*   window.location.reload(false);
    setIsLoading(false); */
  };
};

export default actionHandler;
