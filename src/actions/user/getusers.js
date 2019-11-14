import request from "superagent";
const baseUrl = "http://localhost:4000";

export const STUDENTS_FETCHED = "STUDENTS_FETCHED";

const studentsFetched = students => ({
  type: STUDENTS_FETCHED,
  payload: students
});

export const loadStudents = () => (dispatch) => {

  request(`${baseUrl}/interviewee`)
    .then(response => {
      console.log("response of loadStudents()", response)
      dispatch(studentsFetched(response.body));
    })
    .catch(console.error);
};