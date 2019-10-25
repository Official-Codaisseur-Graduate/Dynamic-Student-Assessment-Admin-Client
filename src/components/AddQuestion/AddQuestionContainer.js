import React, { Component } from 'react'
import AddQuestionForm from './AddQuestionForm'
import {connect} from 'react-redux'
import { addQuestion } from '../../actions/question/question'
import { addAnswers } from '../../actions/question/question'

class AddQuestionContainer extends Component {
    state = {
        questionContent: '',
        categoryId : 0
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log("what is the state", this.state)
        this.props.addQuestion(this.state)

        this.setState({
            questionContent: '',
            categoryId: 0
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
                <AddQuestionForm 
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
                // addedquestion={this.props.addedquestion}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
        addedquestion: state.addedquestion,
        user: state.user        
	}
}

export default connect(mapStateToProps, {addQuestion, addAnswers})(AddQuestionContainer)