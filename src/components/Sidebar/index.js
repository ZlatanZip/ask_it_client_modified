import React, {useState, useEffect} from "react";
import {Row, Col} from "react-bootstrap";
import "./style.css";
import Card from "../UI/Card";

import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
  const [users, setUsers] = useState([]);
  const [hotQuestionList, setHotQuestionList] = useState([]);

  useEffect(() => {
    const {users, hotQuestions} = props;

    setUsers(users);
    setHotQuestionList(hotQuestions);
  }, [props]);

  return (
    <div
      className='sidebarContainer'
      style={{
        width: props.width,
      }}
    >
      <Card title='Ask IT Heroes'>
        <div className='sideBarContainer'>
          <img
            src='data:image/jpeg;base64,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'
            alt=''
          />
        </div>

        <p className='askItHeroDescription'>
          The Hero of the week Zlatan is a passionate answerer and specializing
          as a full-stack developer:)
        </p>

        <div className='sidebarSections'>
          {users !== 0 &&
            users.map((user) => {
              return (
                <NavLink key={user.userId} to={`/users/${user.userId}`}>
                  <div className='sidebarSectionsLink'>
                    <h3>{user.firstName + " " + user.lastName}</h3>
                    <span>{user.numberOfAnswers} Answers</span>
                  </div>
                </NavLink>
              );
            })}
        </div>
      </Card>
      <Card title='Hot Questions'>
        <div className='sidebarSections'>
          {hotQuestionList !== 0 &&
            hotQuestionList.slice(0, 5).map((hotQuestion) => {
              return (
                <NavLink
                  key={hotQuestion._id}
                  to={`/questions/${hotQuestion._id}`}
                >
                  <Row className='sidebarSectionsLink'>
                    <Col md={4}>
                      <img
                        src={require("../../assets/icons/question_marks.jpg")}
                        alt=''
                      />
                    </Col>
                    <Col md={8}>
                      <div className='hotQuestion'>
                        <h3>{hotQuestion.description}</h3>
                        <span>{hotQuestion.votes.positiveVotes} likes</span>
                      </div>
                    </Col>
                  </Row>
                </NavLink>
              );
            })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
