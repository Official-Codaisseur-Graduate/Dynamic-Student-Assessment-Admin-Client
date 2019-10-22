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
import AddQuestionForm from './components/AddQuestion/AddQuestionForm';


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
           <LoginContainer />        
          </Route>

          <Route exact path="/logout" component={LogoutContainer} />
          
            <Route path="/add-question">
              <AddQuestionContainer />
            </Route>
            <Route path="/questions">
              
            </Route>
            <Route path="/students">
              
            </Route>
    </div>
  );
}

export default App;
