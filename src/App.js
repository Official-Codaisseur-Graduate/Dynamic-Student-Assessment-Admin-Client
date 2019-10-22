import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//Stylesheets
import './App.css';
//Components
import NavbarContainer from './components/Navbar/NavbarContainer'
import LoginContainer from './components/Login/LoginContainer'
import SignupContainer from './components/Signup/SignupContainer';
import AddQuestionContainer from './components/AddQuestion/AddQuestionContainer'


function App() {
  return (
    <div className="App">
      <Router>
      <NavbarContainer />
          <Route path="/">
          </Route>
          <Route path="/signup">
            <SignupContainer/>
          </Route>
          <Route path="/login">
            <AddQuestionContainer/>           
          </Route>
      </Router>
    </div>
  );
}

export default App;
