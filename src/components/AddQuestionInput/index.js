import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import CustomModal from "../CustomModal";
import CustomDropDown from "../CutomDropDown";
import "./style.css";
import {addNewQuestion} from "../../store/actions/questions";
import WarningDropDownMessage from "../WarningDropDownMessage";

const AddQuestionInput = (props) => {
  const {role} = props;
  const history = useHistory();

  const [showWarning, setShowWarning] = useState(false);

  const [questionFields, setQuestionFileds] = useState({
    description: "",
    category: "Fun",
  });
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();
  console.log(questionFields);

  const submitQuestion = (e) => {
    e.preventDefault();

    if (
      role === "Member" &&
      questionFields.description !== "" &&
      questionFields.category !== ""
    ) {
      dispatch(addNewQuestion(questionFields));
      window.location.reload(false);
      history.push({pathname: "/my_questions"});
    } else {
      if (role === "Member") {
        setShowWarning(true);
      } else {
        setModalShow((prevstate) => !prevstate);
      }
    }
  };

  const setQuestion = (e) => {
    e.preventDefault();
    const name = e.target.name;
    setQuestionFileds({...questionFields, [name]: e.target.value});
    setShowWarning(false);
  };

  return (
    <React.Fragment>
      {modalShow === true ? (
        <CustomModal
          style={{transition: "0.7s"}}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : null}
      <form className='question_lable_layout' /* onSubmit={submitName} */>
        <input
          name='description'
          type='text'
          placeholder='  Ask IT a Question!'
          value={questionFields.question}
          onChange={setQuestion}
          className={
            questionFields.description === ""
              ? "question_label"
              : "question_lable_active"
          }
        />
        {showWarning && (
          <WarningDropDownMessage title='Type something and send it to hungry answerers !' />
        )}

        <CustomDropDown onSelect={setQuestion} />
        <img
          src={require("../../assets/icons/arrow.png")}
          className={
            questionFields.description === ""
              ? "question_arrow"
              : "question_arrow_active"
          }
          alt='React Bootstrap logo'
          onClick={submitQuestion}
        />
      </form>
    </React.Fragment>
  );
};
export default AddQuestionInput;
