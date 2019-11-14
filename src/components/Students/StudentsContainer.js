import React, { Component } from 'react'
import Students from './Students'
import { connect} from 'react-redux'
import { loadStudents } from '../../actions/user/getusers'

class StudentsContainer extends Component {

    componentDidMount(){
        this.props.loadStudents()
    }

    render() {
        return (
            <div>
                <Students students={this.props.students} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
        students: state.students,
	}
}

export default connect(mapStateToProps, {loadStudents})(StudentsContainer)
