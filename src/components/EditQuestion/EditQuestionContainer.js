import React, { Component } from "react";
import AddQuestionForm from "../AddQuestion/AddQuestionForm";
import AddAnswerForm from "../AddQuestion/AddAnswerForm";
import { connect } from "react-redux";
import { editQuestion, editAnswers } from "../../actions/question/question";
import { loadCategories } from "../../actions/categories";

class EditQuestionContainer extends Component {
  state = {
    questionContent: ""
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  onSubmitQuestion = event => {
    event.preventDefault();
    this.props.editQuestion(this.props.match.params, this.state);

    this.setState({
      questionContent: "",
      categoryId: 0,
      level: 0
    });
  };

  onSubmitAnswer = event => {
    event.preventDefault();

    let answerdata = [];
    for (let i = 1; i <= 4; i++) {
      let answer = "answer" + i;
      let correct = "correct" + i;
      answerdata.push({
        answer: this.state[answer],
        correct: this.state[correct],
        questionId: this.props.match.params.id
      });
      // console.log('answer', answerdata);
    }
    this.props.editAnswers(answerdata);

    this.setState({
      questionContent: "",
      categoryId: 0,
      level: 0
    });
    this.props.history.push(`/questions`);
  };

  onChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        hi from edit mode
        {this.state.categoryId === 0 ? (
          <AddAnswerForm
            onSubmit={this.onSubmitAnswer}
            onChange={this.onChange}
            values={this.state}
          />
        ) : (
          <AddQuestionForm
            onSubmit={this.onSubmitQuestion}
            onChange={this.onChange}
            values={this.state}
            categories={this.props.categories}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    categories: state.categories,
    questions: state.questions
  };
};

export default connect(mapStateToProps, {
  editQuestion,
  editAnswers,
  loadCategories
})(EditQuestionContainer);
