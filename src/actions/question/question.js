import request from "superagent";
import { baseURL } from "../../constants/baseURL";

export const ADDED_QUESTION = "ADDED_QUESTION";
export const addQuestion = data => {
  return (dispatch, getState) => {
    const state = getState();
    const { user } = state;
    const { questionContent, categoryId, level } = data;

    request
      .post(`${baseURL}/question`)
      .set("Authorization", `Bearer ${user.jwt}`)
      .send({ questionContent, categoryId, level })
      .then(response => {
        dispatch({
          type: ADDED_QUESTION,
          payload: response.body
        });
      })
      .catch(error => {
        console.log("ERROR in Add Question--> ", error.response);
      });
  };
};

export const addAnswers = answers => {
  // console.log("ADD ANSWERS data =", answers)
  return dispatch => {
    request
      .post(`${baseURL}/answer`)
      .send(answers)
      .catch(error => {
        console.log("ERROR in Add Answers--> ", error.response);
      });
  };
};

export const DELETE_QUESTION_SUCCESS = "DELETE_QUESTION_SUCCESS";

const deleteQuestionSuccess = questionId => ({
  type: DELETE_QUESTION_SUCCESS,
  payload: questionId
});

export const deleteQuestion = id => dispatch => {
  request.delete(`${baseURL}/question/${id}`).then(response => {
    dispatch(deleteQuestionSuccess(id));
  });
};

// editing a question
export const EDIT_QUESTION_SUCCESS = "EDIT_QUESTION_SUCCESS";

const editQuestionSuccess = newData => ({
  type: EDIT_QUESTION_SUCCESS,
  newData
});

export const editQuestion = (questionId, values) => dispatch => {
  const { id } = questionId;
  console.log(
    "hi from edit question action, this is id and values:",
    id,
    values
  );
  request
    .put(`${baseURL}/question/${id}`)
    .send(values)
    .then(response => {
      dispatch(editQuestionSuccess(response.body));
    })
    .catch(console.error);
};

// editing an answer
export const EDIT_ANSWER_SUCCESS = "EDIT_ANSWER_SUCCESS";

const editAnswerSuccess = newData => ({
  type: EDIT_ANSWER_SUCCESS,
  newData
});

export const editAnswers = (id, values) => dispatch => {
  request
    .put(`${baseURL}/answer/${id}`)
    .send(values)
    .then(response => {
      dispatch(editAnswerSuccess(response.body));
    })
    .catch(console.error);
};
