import React, {useState, useCallback, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Container, Button, Card, Accordion, CardDeck} from "react-bootstrap";
import {Link} from "react-router-dom";

import Cards from "../../components/UI/Card";
import Spinner from "../../components/Spinner";
import AnswerItem from "../../components/AnswerItem";

import {
  getSingleQuestionDetails,
  answerQuestion,
} from "../../store/actions/questions";

const QuestionDetails = (props) => {
  const {userId, role} = props;
  const questionId = props.match.params.id;
  const [error, setError] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [answerFields, setAnswerFileds] = useState({
    answer: "",
    updatedAnswer: "",
  });
  const dispatch = useDispatch();

  const fetchQuestion = useCallback(async () => {
    setIsLoading(true);
    try {
      await dispatch(getSingleQuestionDetails(questionId));
    } catch (err) {
      setError(err.message);
    }
    setError(null);
    setIsLoading(false);
  }, [dispatch, questionId]);

  useEffect(() => {
    setIsLoading(true);
    fetchQuestion().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, fetchQuestion]);

  const setAnswer = (e) => {
    e.preventDefault();
    const name = e.target.name;
    setAnswerFileds({...answerFields, [name]: e.target.value});
    setShowWarning(false);
  };

  /*   const submitAnswer = (e) => {
    e.preventDefault();

    if (
       role === "Member" &&
     answer !== "" 
    ) {
      dispatch(answerQuestion(questionId,answer));
     // window.location.reload(false);
      //history.push({pathname: "/my_questions"});
    } else {
      if (role === "Member") {
        setShowWarning(true);
      } else {
        setModalShow((prevstate) => !prevstate);
      }
    }
  }; */

  const question = useSelector(
    (state) => state.questions.singleQuestionDetails
  );

  console.log(question);

  if (error) {
    return (
      <div className='centered'>
        <h3> The server may temporarily be unavailable!</h3>
        <button
          className='navbar_buttons sign_up_button_color'
          onClick={fetchQuestion}
        >
          Try Again
        </button>
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

  if (!isLoading && question === null) {
    return (
      <div className='centered'>
        <h3> No Questions found.Try adding some!</h3>
      </div>
    );
  }

  return (
    <Cards
      component={
        <button
          className='navbar_buttons sign_up_button_color'
          onClick={() => {}}
        >
          Answer the question
        </button>
      }
      title={`question by ${question && question.authorName}`}
      biggerTitle={question && question.description}
      style={{marginBottom: "5px"}}
    >
      {question &&
        question.answers.map((answer) => {
          return (
            <AnswerItem
              warning={showWarning}
              setAnswerField={setAnswer}
              updatedAnswer={answerFields.updatedAnswer}
              key={answer.id}
              signedInUserId={userId}
              answerData={answer}
            />
          );
        })}
    </Cards>
  );
};

export default QuestionDetails;
