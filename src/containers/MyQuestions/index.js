import React, {useEffect, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {Button, Row} from "react-bootstrap";

import {getUsersQuestions} from "../../store/actions/questions";

import "./style.css";
import Spinner from "../../components/Spinner";
import Card from "../../components/UI/Card";
import QuestionItem from "../../components/QuestionItem";
import SideBar from "../../components/Sidebar";

const MyQuestions = (props) => {
  const {pathname} = props.location;
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const userQuestions = useSelector((state) => state.questions.userQuestions);

  const fetchQuestions = useCallback(async () => {
    setIsLoading(true);
    try {
      await dispatch(getUsersQuestions());
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    fetchQuestions().then(() => {
      setIsLoading(false);
    });
  }, [fetchQuestions]);

  if (error) {
    return (
      <div className='centered'>
        <h3> The server may temporarily be unavailable!</h3>
        <button
          className='navbar_buttons sign_up_button_color'
          onClick={fetchQuestions}
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

  if (!isLoading && userQuestions.length === 0) {
    return (
      <div className='centered'>
        <h3> No Questions found.Try adding some!</h3>
      </div>
    );
  }

  return (
    <Card
      biggerTitle='My Questions'
      footer={
        <button
          onClick={fetchQuestions}
          className='navbar_buttons login_button_color'
        >
          Show More
        </button>
      }
      style={{marginBottom: "5px"}}
    >
      <div className='my_questions_wrapper'>
        {userQuestions.map((question) => (
          <QuestionItem key={question._id} questionDetails={question} />
        ))}
      </div>{" "}
    </Card>
  );
};

export default MyQuestions;
