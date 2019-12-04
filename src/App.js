import React, { Component } from "react";
import { Route } from "react-router-dom";

//Stylesheets
import "./App.css";
import "typeface-roboto";

//Components
import NavbarContainer from "./components/Navbar/NavbarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import SignupContainer from "./components/Signup/SignupContainer";
import AddQuestionContainer from "./components/AddQuestion/AddQuestionContainer";
import LogoutContainer from "./components/Logout/LogoutContainer";
import ListContainer from "./components/List/ListContainer";
import StudentsContainer from "./components/Students/StudentsContainer";
import Homepage from "./components/Homepage/Homepage";
import { connect } from "react-redux";
import EditQuestionContainer from "./components/EditQuestion/EditQuestionContainer";
import AddStudentContainer from "./components/AddStudent/AddStudentContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavbarContainer />
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/logout" component={LogoutContainer} />
        </div>

        {!this.props.loggedIn ? (
          <Route path="/" exact component={Homepage} />
        ) : (
          <div>
            <Route
              exact
              path="/add-question"
              component={AddQuestionContainer}
            />
            <Route exact path="/questions" component={ListContainer} />
            <Route exact path="/students" component={StudentsContainer} />
            <Route
              exact
              path="/edit-question/:id"
              component={EditQuestionContainer}
            />
            <Route exact path="/add-student" component={AddStudentContainer} />
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
