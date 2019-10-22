import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {logout} from '../actions/userActions'
import { Link } from 'react-router-dom'

class LogoutContainer extends Component {

    componentDidMount() {
        //ADD ACTION THAT UPDATES JWT REDUX STATE


		// this.props.dispatch(
        //     logout()
        // )
	}

    render() {
      return(
          <div>
            <h3>You have succesfully logged out!</h3>
            <p>Back to the <Link to="/">homepage</Link></p>
          </div>
      )
    }
  }

  
export default connect()(LogoutContainer);