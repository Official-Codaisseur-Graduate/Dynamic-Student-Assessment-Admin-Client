import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../../store";

class StudentInfo extends Component {
  state = {
    students: [],
    studentId: 0
  };

  componentDidMount() {
    const students = store.getState().students.rows;
    this.setState({ students: students });
    const studentId = this.props.match.params.id;
    this.setState({ studentId: studentId });
  }

  render() {
    const id = this.state.studentId;
    const student = this.state.students.find(
      student => student.id === Number(id)
    );
    if (id === 0) {
      return "loading...";
    } else {
      return (
        <div>
          Student email: {student.email}
          <br></br>
          <br></br>
          Test scores:
          {student.tests.map(test => (
            <li>{test.score}</li>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    students: state.students,
    student: state.student
  };
};

export default connect(mapStateToProps)(StudentInfo);
