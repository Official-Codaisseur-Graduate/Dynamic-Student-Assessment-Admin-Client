import React, { Component } from 'react'
import AddQuestionForm from './AddQuestionForm'
import AddAnswerForm from './AddAnswerForm'
import { connect } from 'react-redux'
import { addQuestion } from '../../actions/question/question'
import { addAnswers } from '../../actions/question/question'

class AddQuestionContainer extends Component {
    state = {
        questionContent: '',
        categoryId: 0,
        level: 0
    }

    onSubmitQuestion = (event) => {
        event.preventDefault()
        console.log("Submitting a question! This is the state:", this.state)
        this.props.addQuestion(this.state)

        this.setState({
            questionContent: '',
            categoryId: 0,
            level: 0,
        })
    }
    
    onSubmitAnswer = (event) => {
        console.log('Submitting answers! This is the state:', this.state );
        
    }

    onChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <AddQuestionForm
                    onSubmit={this.onSubmitQuestion}
                    onChange={this.onChange}
                    values={this.state}
                />
                {/* {this.props.question.id && } */}
                <AddAnswerForm
                    onSubmit={this.onSubmitQuestion}
                    onChange={this.onChange}
                    values={this.state}
                />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        question: state.question,
        user: state.user
    }
}

export default connect(mapStateToProps, { addQuestion, addAnswers })(AddQuestionContainer)