import request from "superagent";
import { baseURL } from '../../constants/baseURL'

export const STUDENTS_FETCHED = "STUDENTS_FETCHED";

const studentsFetched = students => ({
  type: STUDENTS_FETCHED,
  payload: students
});

export const loadStudents = () => (dispatch) => {

  request(`${baseURL}/interviewee`)
    .then(response => {
      dispatch(studentsFetched(response.body));
    })
    .catch(console.error);
};