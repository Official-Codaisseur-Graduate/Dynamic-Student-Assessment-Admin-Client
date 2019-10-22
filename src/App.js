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
import LogoutContainer from './components/Logout/LogoutContainer'



function App() {
  return (
  
    <div className="App">

      <NavbarContainer />
          <Route path="/">
          </Route>
          <Route path="/signup">
            <SignupContainer/>
          </Route>
          <Route path="/login">
            <AddQuestionContainer/>           
          </Route>
          <Route path="/logout">
            <LogoutContainer/>
            </Route>
    </div>
  );
}

export default App;
