import request from "superagent";
import { baseURL } from "../../constants/baseURL";

export const STUDENTS_FETCHED = "STUDENTS_FETCHED";

const studentsFetched = students => ({
  type: STUDENTS_FETCHED,
  payload: students
});

export const loadStudents = () => dispatch => {
  request(`${baseURL}/interviewee`)
    .then(response => {
      console.log(
        "what is the response when loading students: ",
        response.body
      );
      dispatch(studentsFetched(response.body));
    })
    .catch(console.error);
};

export const addStudent = student => dispatch => {
  request
    .post(`${baseURL}/interviewee`)
    .send(student)
    .then(response => {
      dispatch(loadStudents());
    })
    .catch(error => {
      console.log("ERROR in Add Student--> ", error.response);
    });
};
