import request from "superagent";
import { baseURL } from '../../constants/baseURL'

export const CODE_GENERATED = "CODE_GENERATED";

const codeGenerated = otp => ({
  type: CODE_GENERATED,
  payload: otp
});

export const generateCode = (id) => (dispatch) => {

  request
    .post(`${baseURL}/test?intervieweeId=${id}`)
    .then(response => {
      dispatch(codeGenerated(response.body));
    })
    .catch(console.error);
};