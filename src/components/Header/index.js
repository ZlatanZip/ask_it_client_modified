import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Row, Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";

import {logout} from "../../store/actions/users";

import CustomModal from "../CustomModal";
import Card from "../UI/Card";
import Logo from "../Logo";
import Navbar from "../Navbar";
import QuestionInput from "../AddQuestionInput";

const Header = (props) => {
  const {role, a} = props;
  //const role = "Member";

  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = async () => {
    try {
      await dispatch(logout());
    } catch (err) {
      console.log(err.message);
    }

    history.push({
      pathname: "/",
    });
    window.location.reload(false);
  };

  return (
    <React.Fragment>
      {modalShow === true ? (
        <CustomModal
          onModalShow={setModalShow}
          style={{transition: "height 0.6s"}}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : null}
      <Card
        //tried and it worked, maybe not best practice, but I find it neat
        header={<Navbar role={role} onLogout={logoutHandler} />}
        title='Let passionate answerers take care of your question'
      >
        <Row>
          <Col lg={6}>
            <Logo {...props} />
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <QuestionInput role={role} onModalShow={setModalShow} />
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default Header;
