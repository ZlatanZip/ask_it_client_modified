import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import Card from "../Card";
import QuestionItem from "../../QuestionItem";

const Midcontent = (props) => {
  const {questions, loadMore} = props;
  return (
    <div>
      <Container>
        <Row>
          <Col xl={8} xs={12} md={12}>
            <Card
              title='Recent Questions'
              //component={<Search />}
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
              ))}{" "}
              <button
                className='navbar_buttons login_button_color'
                onClick={loadMore}
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
            {/*  <Sidebar users={users} hotQuestions={questions} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Midcontent;
