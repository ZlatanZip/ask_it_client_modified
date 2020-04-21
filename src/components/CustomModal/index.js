import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import {Modal, Button, Container, Row, Col} from "react-bootstrap";

import "./style.css";

const CustomModal = (props) => {
  // let history = useHistory();
  const [modalShows, setModalShows] = useState(true);

  /* const loginRegister = (type) => {
    if (type === "login") {
      history.push({
        pathname: "/login",
      });
    } else {
      history.push({
        pathname: "/register",
      });
    }
  }; */

  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <div className='modal_layout_wrapper'>
        <Modal.Header className='modal_header_background' closeButton>
          <Modal.Title
            className='modal_logo_and_title_wrapper'
            id='contained-modal-title-vcenter'
          >
            {/*  <img
              src={require("../../assets/icons/question-marks.png")}
              className='modal_logo'
              alt='React Bootstrap logo'
            />{" "} */}
            <h3 className='modal_title'>
              Almost there,login or sign up and Happy Questioning,Answering and
              Voting :)
            </h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className='modal_body'>
          <Row>
            <Col lg={6} xs={8} className='modal_img'>
              <div>
                <img
                  style={{width: "100%"}}
                  alt=''
                  onClick={() => {}}
                  src={require("../../assets/photos/thumbs_up_man.png")}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <h3 className='modal_tagline'>
              Being a active Member you'll be apart of huge society of
              passionate questioners and answers, what means that you'll be able
              to solve an issue in matter of minutes.Happy contribution.Thumbs
              Up!
            </h3>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <div className='modal_footer'>
            <button
              onClick={() => {
                setModalShows(false);
              }}
              className='navbar_buttons login_button_color'
            >
              <Link to='/login'>Login</Link>
            </button>

            <button
              //onClick={() => loginRegister("register")}
              className=' navbar_buttons sign_up_button_color'
            >
              <Link to='/register'>Register</Link>
            </button>
          </div>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default CustomModal;
