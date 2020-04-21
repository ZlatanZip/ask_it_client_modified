import React, {useEffect, useState, useRef, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Container, Row, Col, Button} from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroller";

import Spinner from "../../components/Spinner";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/UI/Card";
import QuestionItem from "../../components/QuestionItem";

import "./style.css";

import {fetchAllQuestions} from "../../store/actions/questions";
import {getUsers} from "../../store/actions/users";
import Search from "../../components/Search";

const Home = (props) => {
  const [items, setItems] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  const path = props.location.pathname;
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState();

  const questions = useSelector((state) => state.questions.allQuestions);
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();
  let page = 1;
  const loadQuestions = useCallback(async () => {
    page++;

    setError(null);
    setIsLoading(true);

    try {
      dispatch(getUsers());
      await dispatch(fetchAllQuestions());
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [dispatch, page, setError]);

  useEffect(() => {
    loadQuestions().then(() => {
      setIsLoading(false);
    });
  }, [loadQuestions]);

  useEffect(() => {
    if (error) {
      //Alert.alert("Notification!", error, [{h3: "Okay"}])
    }
  }, [error]);

  if (error) {
    return (
      <div className='centered'>
        <h3> The server may temporarily be unavailable!</h3>

        <Button variant='info' onClick={() => loadQuestions}>
          Try Again
        </Button>
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

  if (!isLoading && questions.length === 0) {
    return (
      <div className='centered'>
        <h3> No Questions found.Try adding some!</h3>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <Row>
          <Col xl={8} xs={12} md={12}>
            <Card
              title='Recent Questions'
              header={<Search />}
              style={{marginBottom: "5px"}}
            >
              {/*   <InfiniteScroll
                pageStart={page}
                loadMore={loadQuestions}
                hasMore={totalHits > items.length}
                threshold={100}
                useWindow={false}
              >
                <div
                  style={{
                    height: "1210px",
                    width: "100%",
                    overflow: "auto",
                    overflowX: "hidden",
                  }}
                > */}
              {questions.reverse().map((question) => (
                <QuestionItem key={question._id} questionDetails={question} />
              ))}
              <button
                className='navbar_buttons login_button_color'
                onClick={loadQuestions}
              >
                Read More
              </button>
              {/*   </div>
                <div className='question_list_footer'>
                 
                </div>
              </InfiniteScroll> */}
            </Card>

            {/*   <RecentQuestions questions={questions} /> */}
          </Col>
          <Col xs={12} md={4}>
            <Sidebar users={users} hotQuestions={questions} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
