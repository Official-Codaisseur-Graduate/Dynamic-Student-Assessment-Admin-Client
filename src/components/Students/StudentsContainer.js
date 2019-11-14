// import React, { Component } from 'react'
// import Students from './Students'
// import { connect } from 'react-redux'
// import { getUsers } from '../../actions/user/getusers'



// class StudentsContainer extends Component {

//     componentDidMount(){
//         // this.props.getUsers()
//     }

//     render() {
//         return (
//             <div>
//                 <Students
//                 data = {this.props.userList} />
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => {
// 	return {
//         userList: state.allUsers,
// 	}
// }

// export default connect(mapStateToProps, {getUsers})(StudentsContainer)

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadUsers} from '../../actions/user/getusers'
import Students from './Students'

class StudentsContainer extends Component {

    componentDidMount(){
        this.props.loadUsers()
    }
    render() {
        console.log("prps in container", this.props.users)
        return (
            <div>
                <Students users={this.props.users}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.allUsers
    }
}

export default connect(mapStateToProps, {loadUsers})(StudentsContainer)
