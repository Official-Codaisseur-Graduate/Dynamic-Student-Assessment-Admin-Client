import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListQuestions from './ListQuestions'
import { questions } from '../../actions/question'
import { deleteQuestion } from '../../actions/question/question'
import { Typography } from '@material-ui/core'




 class ListContainer extends Component {
    
    componentDidMount(){
      this.props.questions();
    }

    onClick = (questionId) => {
        this.props.deleteQuestion(questionId)
      }

    render() {
        if(this.props.questionList === 0){
        return <Typography variant="h4">Fetching data from server...</Typography>
            } else{
        return (
            
            <div>
                <ListQuestions 
                questions={this.props.questionList}
                onClick={this.onClick}
                />
            </div>
        )
    }}
}
const mapStateToProps = (state) => {
	return {
        questionList: state.questions,
	}
}

const mapDispatchToProps = {questions, deleteQuestion}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
