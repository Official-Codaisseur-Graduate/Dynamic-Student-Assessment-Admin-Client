import request from "superagent";
const baseUrl = "http://localhost:4000";

export const CODE_GENERATED = "CODE_GENERATED";

const codeGenerated = otp => ({
  type: CODE_GENERATED,
  payload: otp
});

export const generateCode = (id) => (dispatch) => {

  request
    .post(`${baseUrl}/test?intervieweeId=${id}`)
    .then(response => {
    //   console.log("response of generateCode()", response)
      dispatch(codeGenerated(response.body));
    })
    .catch(console.error);
};