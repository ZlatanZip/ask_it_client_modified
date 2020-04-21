import React from "react";
import {DropdownButton, Dropdown} from "react-bootstrap";
import "./style.css";

import categories from "../../constants/categories";

const CustomDropDown = (props) => {
  const {onSelect} = props;
  return (
    <DropdownButton onClick={onSelect} id='dropdown-button-item' title=''>
      {categories.map((category, i) => {
        return (
          <Dropdown.Item
            name='category'
            value={category.categoryName}
            key={i}
            drop='left'
            as='button'
          >
            {category.categoryName}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};

export default CustomDropDown;
