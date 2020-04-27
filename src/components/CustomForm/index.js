import React, {useState} from "react";
import {FcExpand} from "react-icons/fc";

import CustomDropDown from "../CutomDropDown";
import WarningDropDownMessage from "../WarningDropDownMessage";

const CustomForm = (props) => {
  const {typeOfAction, submitValue, placeholder, style} = props;
  const [inputValue, setInputValue] = useState("");

  const setValue = (e) => {
    const {value} = e.target;
    setInputValue(value);
    //setShowWarning(false);
  };

  return (
    <form className='question_lable_layout' /* onSubmit={submitName} */>
      {/*  {style && ( */}
      <input
        style={style}
        name='description'
        type='text'
        placeholder={placeholder}
        value={inputValue}
        onChange={setValue}
        className={
          inputValue === "" ? "question_label" : "question_lable_active"
        }
      />
      {/*    )} */}
      {/*   {inputValue !== "" && (
        <WarningDropDownMessage title='Type something and send it to hungry answerers !' />
      )} */}

      {typeOfAction === "addAQuestion" && (
        <CustomDropDown onSelect={() => {}} />
      )}
      {/*  <FcExpand size={40} /> */}
      {/*  {style && ( */}
      <img
        src={require("../../assets/icons/arrow.png")}
        className={
          inputValue === "" ? "question_arrow" : "question_arrow_active"
        }
        alt='React Bootstrap logo'
        onClick={() => submitValue(null, inputValue, typeOfAction)}
      />
      {/*    )} */}
    </form>
  );
};

export default CustomForm;
