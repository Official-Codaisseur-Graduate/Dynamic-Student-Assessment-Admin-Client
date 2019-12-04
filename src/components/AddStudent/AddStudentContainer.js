import React, { Component } from "react";
import { connect } from "react-redux";
import AddStudentForm from "./AddStudentForm";
import { addStudent } from "../../actions/user/students";

class AddStudentContainer extends Component {
  state = {
    email: ""
  };

  onSubmitStudent = event => {
    event.preventDefault();
    this.props.addStudent(this.state);

    this.setState({
      email: ""
    });
    this.props.history.push(`/students`);
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
      email: ""
    });
    this.props.history.push(`/students`);
  };

  render() {
    return (
      <AddStudentForm
        onSubmit={this.onSubmitStudent}
        onChange={this.onChange}
        values={this.state}
        onCancel={this.onCancel}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {
  addStudent
})(AddStudentContainer);
