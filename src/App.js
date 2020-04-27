import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./App.css";
import Layout from "./containers/Layout";
import Header from "./components/Header";
import Home from "./containers/Home";
import MyQuestions from "./containers/MyQuestions";
import Footer from "./components/Footer";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import QuestionDetails from "./containers/QuestionDetails";

import setAuthorizationHeader from "./helpers/setAuthorizationheader";

const App = (props) => {
  const userData = localStorage.getItem("userData");
  let parsedData;
  if (userData) {
    parsedData = JSON.parse(userData);
    setAuthorizationHeader("Bearer " + parsedData.token);
  }

  return (
    <Router>
      <Switch>
        <div className='App'>
          <Header role={parsedData && parsedData.role} />
          <Route path='/' exact component={Home} />
          <Route
            path='/questions/:id'
            render={(props) => (
              <QuestionDetails
                {...props}
                userId={parsedData && parsedData.userId}
              />
            )}
          />
          <Route
            path='/my_questions'
            render={(props) => (
              <MyQuestions
                {...props}
                userId={parsedData && parsedData.userId}
              />
            )}
          />
          <Route
            token={parsedData && parsedData.token}
            path='/login'
            component={Login}
          />
          <Route
            token={parsedData && parsedData.token}
            path='/register'
            component={Register}
          />
          <Route path='/profile' component={Profile} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
