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
            level: 0
        })
    }
    
    onSubmitAnswer = (event) => {
        event.preventDefault()
        console.log("Submitting answers! This is the state:", this.state)
        
        let answerdata = []
        for (let i = 1; i <= 4; i++) {
            let answer = 'answer' + i
            let correct = 'correct' + i
            answerdata.push({ answer: this.state[answer], correct: this.state[correct], questionId: 1}) 
            // console.log('answer', answerdata); 
        }
        this.props.addAnswers(answerdata)

        this.setState({
            questionContent: '',
            categoryId: 0,
            level: 0,
        })
        
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
                {/* {!this.props.newQuestion.id &&
                <AddQuestionForm
                    onSubmit={this.onSubmitQuestion}
                    onChange={this.onChange}
                    values={this.state}
                />
            }
                {this.props.newQuestion.id && */}
                <AddAnswerForm
                    onSubmit={this.onSubmitAnswer}
                    onChange={this.onChange}
                    values={this.state}
                />
                {/* } */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newQuestion: state.newQuestion,
        user: state.user
    }
}

export default connect(mapStateToProps, { addQuestion, addAnswers })(AddQuestionContainer)