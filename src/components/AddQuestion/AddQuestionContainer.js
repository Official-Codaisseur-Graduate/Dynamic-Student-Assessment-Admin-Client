import React, { Component } from 'react'
import AddQuestionForm from './AddQuestionForm'
import {connect} from 'react-redux'
import { addQuestion } from '../../actions/question/question'
import { addAnswers } from '../../actions/question/question'

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
        this.props.addQuestion(this.state.question)
        this.props.addAnswers([this.state.rightAnswer, this.state.wrongAnswer1, this.state.wrongAnswer2, this.state.wrongAnswer3])

        this.setState({
            question: '',
            rightAnswer: '',
            wrongAnswer1: '',
            wrongAnswer2: '',
            wrongAnswer3: '',
        })
        
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

export default connect(mapStateToProps, {addQuestion, addAnswers})(AddQuestionContainer)