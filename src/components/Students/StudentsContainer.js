import React, { Component } from 'react'
import Students from './Students'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/user/getusers'



class StudentsContainer extends Component {

    componentDidMount(){
        // this.props.getUsers()
    }

    render() {
        return (
            <div>
                <Students
                data = {this.props.userList} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
	return {
        userList: state.allUsers,
	}
}

export default connect(mapStateToProps, {getUsers})(StudentsContainer)

