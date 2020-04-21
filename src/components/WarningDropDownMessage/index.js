import React from "react";

const WarningDropDown = ({title}) => {
  return (
    <div className='warning_wrapper'>
      <img
        style={{width: "8%", marginLeft: "40px"}}
        alt=''
        src={require("../../assets/photos/arrow_up.jpg")}
      />
      <h5 className='question_warning'>{title}</h5>
    </div>
  );
};

export default WarningDropDown;
