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


function App() {
  return (
    <div className="App">
      <Router>
      <NavbarContainer />
      <Switch>
          <Route path="/">
         
          </Route>
          <Route path="/signup">
            
          </Route>
          <Route path="/login">
           
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
