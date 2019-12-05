import React, { Component } from "react";
import { connect } from "react-redux";

class StudentInfo extends Component {
  render() {
    const student = this.props.students;
    return <div>hello world</div>;
  }
}

const mapStateToProps = state => {
  return {
    students: state.students,
    student: state.student
  };
};

export default connect(mapStateToProps)(StudentInfo);
