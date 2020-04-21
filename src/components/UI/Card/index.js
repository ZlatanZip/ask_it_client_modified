import React from "react";
import "./style.css";
import {Container, Row, Col} from "react-bootstrap";

const Card = (props) => {
  const {title, biggerTitle, header, footer, children} = props;
  return (
    <Container>
      <div className='card' style={{width: props.width ? props.width : "100%"}}>
        {header}
        {title || biggerTitle ? (
          <div className='cardHeader'>
            {biggerTitle ? (
              <div>
                <h3 className='FormTitle'>{biggerTitle}</h3>
                <span> {title}</span>
              </div>
            ) : (
              <span> {title}</span>
            )}
          </div>
        ) : null}
        {children}
        <div className='children_wrapper'>{footer}</div>
      </div>
    </Container>
  );
};

export default Card;
