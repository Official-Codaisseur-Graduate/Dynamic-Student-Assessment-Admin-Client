import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListQuestions from './ListQuestions'
import { questions } from '../../actions/question'
import { Typography } from '@material-ui/core'


 class ListContainer extends Component {
    
    componentDidMount(){
      this.props.questions();
    }

    render() {
        if(this.props.questionList === 0){
        return <Typography variant="h4">Fetching data from server...</Typography>
            } else{
        return (
            
            <div>
                <ListQuestions 
                questions={this.props.questionList}
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

export default connect(mapStateToProps, {questions})(ListContainer)
