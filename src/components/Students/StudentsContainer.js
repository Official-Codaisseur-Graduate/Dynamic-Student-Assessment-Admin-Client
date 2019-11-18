import React, { Component } from 'react'
import Students from './Students'
import { connect } from 'react-redux'
import { loadStudents } from '../../actions/user/students'
import { generateCode } from '../../actions/user/generatecode'
import CodeForm from './CodeForm'

class StudentsContainer extends Component {

    state = {
        intervieweeId: ''
    }

    componentDidMount() {
        this.props.loadStudents()
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.generateCode(this.state.intervieweeId)
        this.setState({
            intervieweeId: ''
        })
    }

    render() {
        return (
            <div>
                <Students students={this.props.students} />
                <CodeForm
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    values={this.state}
                    code={this.props.code}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students,
        code: state.generatecode.code
    }
}

export default connect(mapStateToProps, { loadStudents, generateCode })(StudentsContainer)
