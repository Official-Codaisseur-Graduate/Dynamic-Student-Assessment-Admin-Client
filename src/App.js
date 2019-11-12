import React, { Component } from 'react'
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";

//Stylesheets
import './App.css';
import 'typeface-roboto';

//Components
import NavbarContainer from './components/Navbar/NavbarContainer'
import LoginContainer from './components/Login/LoginContainer'
import SignupContainer from './components/Signup/SignupContainer';
import AddQuestionContainer from './components/AddQuestion/AddQuestionContainer'
import LogoutContainer from './components/Logout/LogoutContainer'
import ListContainer from './components/List/ListContainer'
import StudentsContainer from './components/Students/StudentsContainer';
import Homepage from './components/Homepage/Homepage';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log('logged in?', this.props.loggedIn);

    return (

      <div className="App">

        <div>
          <NavbarContainer />
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/logout" component={LogoutContainer} />
        </div>
        {!this.props.loggedIn ? (
          <Route exact path="/" component={Homepage} />
        ) : (
            <div>
              <Route exact path="/add-question" component={AddQuestionContainer} />
              <Route exact path="/questions" component={ListContainer} />
              <Route exact path="/students" component={StudentsContainer} />
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.user.jwt !== null
  };
};

export default connect(mapStateToProps)(App);
