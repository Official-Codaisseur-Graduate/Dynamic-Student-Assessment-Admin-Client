import React, { Component } from 'react'
import AddQuestionForm from './AddQuestionForm'

export default class AddQuestionContainer extends Component {
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
    }


    onChange = (event) => {
        console.log("things have changed")
    }

    render() {
        return (
            <div>
                <AddQuestionForm 
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                />
            </div>
        )
    }
}
