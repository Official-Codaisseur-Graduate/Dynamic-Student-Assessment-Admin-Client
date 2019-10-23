import React, { Component } from 'react'
import AddQuestionForm from './AddQuestionForm'
import {connect} from 'react-redux'

class AddQuestionContainer extends Component {
    state = {
        question: '',
        rightAnswer: '',
        wrongAnswer1: '',
        wrongAnswer2: '',
        wrongAnswer3: '',
    }


    onSubmit = (event) => {
        event.preventDefault()
        console.log("form submitted")
        console.log("what is the state", this.state)
    }
    
    onChange = (event) => {
        this.setState({
			[event.target.name]: event.target.value
		})
    }

    render() {
        return (
            <div>
                <AddQuestionForm 
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		addedQuestion: state
	}
}

export default connect(mapStateToProps)(AddQuestionContainer)