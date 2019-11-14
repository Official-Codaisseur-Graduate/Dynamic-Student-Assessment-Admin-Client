import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class LogoutContainer extends Component {

    componentDidMount() {
      this.props.dispatch({
        type: "USER_LOGOUT",
        payload: { jwt: null }
      })
	}

    render() {
      return(
          <div>
           <Redirect to="/"/>
          </div>
      )
    }
  }

  
export default connect()(LogoutContainer);

