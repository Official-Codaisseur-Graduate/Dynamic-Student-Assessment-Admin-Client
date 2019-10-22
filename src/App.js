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
import SignupContainer from './components/Signup/SignupContainer'
import LogoutContainer from './components/Logout/LogoutContainer'


function App() {
  return (
    <div className="App">
      <Router>
      <NavbarContainer />
      <Switch>
          <Route path="/">
         
          </Route>
          <Route path="/signup">
            <SignupContainer/>
          </Route>
          <Route path="/login">
            <LoginContainer/>           
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
