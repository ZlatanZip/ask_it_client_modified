import React, {useState} from "react";
import "./style.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Container, Row, Col} from "react-bootstrap";

import CustomForm from "../CustomForm";

const QuestionItem = (props) => {
  const {questionDetails, signedInUserId, questionAction} = props;
  const {_id, authorName, createdOn, postedBy, description} = questionDetails;
  const [showForm, setShowForm] = useState(false);
  console.log(questionDetails);
  var MS_IN_A_DAY = 1000 * 60 * 60 * 24;
  var difference = Date.now() - Date.parse(createdOn.date);
  var daysDifference = Math.floor(difference / MS_IN_A_DAY);

  var screenWidth = window.innerWidth;
  const responsiveButtonsClass =
    window.innerWidth > 450 ? "navbar_buttons" : "small_screen_buttons";

  const userInfo = useSelector((state) => state.users.userInfo);

  const votePositive = (role, _id) => {
    if (role === "Member") {
      console.log("You voted negative");
    } else {
      console.log("Only Members can vote for a question");
    }
  };

  const voteNegative = (role, _id) => {
    if (role === "Member") {
      console.log("You voted positive");
    } else {
      console.log("Only Members can vote for a question");
    }
  };

  return (
    <Container className='question_wrapper'>
      <Row>
        <Col xs={4} className='qusetion_logo'>
          <img
            id='question_mark'
            alt='question_mark'
            src={require("../../assets/icons/question-mark.jpg")}
          />
        </Col>
        <Col className='question_link_wrapper' md={8} xs={8}>
          <Link className='question_link' to={`/questions/${_id}`}>
            <h5> {description}</h5>
            {screenWidth > 420 && (
              <span>
                {daysDifference < 1
                  ? `Posted today by ${authorName}`
                  : createdOn.message}
              </span>
            )}
          </Link>
          {showForm && (
            <div>
              <CustomForm
                placeholder=' Type in changed question!'
                submitValue={() => {}}
                typeOfAction='update'
              />
              {/*  {showWarning && (
                  <WarningDropDownMessage title='To  update a answer you need to type in some proper text :) !' />
                )} */}
            </div>
          )}
          {postedBy === signedInUserId && (
            <div className='answer_button_wrapper'>
              <button
                className={responsiveButtonsClass}
                onClick={() => setShowForm((prevState) => !prevState)}
              >
                {!showForm ? "Edit" : "Close"}
              </button>
              <button
                className={responsiveButtonsClass}
                onClick={questionAction(_id, "delete")}
              >
                Delete
              </button>
            </div>
          )}
        </Col>
        {/*  <Col sm={2} xs={2} className='question_thumbs_wrapper'>
          <img
            alt='thumbsUpLogo'
            className='question_thumbs'
            onClick={() => console.log("thumb up")}
            src={require("../../assets/icons/thumb_up.png")}
            onClick={votePositive}
          />
          <span>{votes.positiveVotes}</span>
          <img
            alt='thumbsDownLogo'
            className='question_thumbs'
            onClick={() => console.log("thumb down")}
            src={require("../../assets/icons/thumb_down.png")}
            onClick={voteNegative}
          />
          <span>{votes.negativeVotes}</span>
        </Col> */}
      </Row>
    </Container>
  );
};

export default QuestionItem;
