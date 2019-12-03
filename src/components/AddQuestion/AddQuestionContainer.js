import React, { Component } from "react";
import AddQuestionForm from "./AddQuestionForm";
import AddAnswerForm from "./AddAnswerForm";
import { connect } from "react-redux";
import { addQuestion, addAnswers } from "../../actions/question/question";
import { loadCategories } from "../../actions/categories";

class AddQuestionContainer extends Component {
  state = {
    questionContent: ""
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  onSubmitQuestion = event => {
    event.preventDefault();
    this.props.addQuestion(this.state);

    this.setState({
      questionContent: "",
      categoryId: 0,
      level: 0
    });
  };

  onSubmitAnswer = event => {
    event.preventDefault();
    // console.log("New question id:", this.props.newQuestion.id)

    let answerdata = [];
    for (let i = 1; i <= 4; i++) {
      let answer = "answer" + i;
      let correct = "correct" + i;
      answerdata.push({
        answer: this.state[answer],
        correct: this.state[correct],
        questionId: this.props.newQuestion.id
      });
      // console.log('answer', answerdata);
    }
    this.props.addAnswers(answerdata);

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

  onCancel = event => {
    event.preventDefault();
    this.setState({
      questionContent: "",
      categoryId: 0,
      level: 0
    });
    this.props.history.push(`/questions`);
  };

  render() {
    return (
      <div>
        {!this.props.newQuestion.id && (
          <AddQuestionForm
            onSubmit={this.onSubmitQuestion}
            onChange={this.onChange}
            values={this.state}
            categories={this.props.categories}
            onCancel={this.onCancel}
          />
        )}
        {this.props.newQuestion.id && (
          <AddAnswerForm
            onSubmit={this.onSubmitAnswer}
            onChange={this.onChange}
            values={this.state}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newQuestion: state.newQuestion,
    user: state.user,
    categories: state.categories
  };
};

export default connect(mapStateToProps, {
  addQuestion,
  addAnswers,
  loadCategories
})(AddQuestionContainer);
