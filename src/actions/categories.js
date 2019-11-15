import request from "superagent";
const baseUrl = "http://localhost:4000";

export const CATEGORIES_FETCHED = "CATEGORIES_FETCHED";

const categoriesFetched = categories => ({
  type: CATEGORIES_FETCHED,
  payload: categories
});

export const loadCategories = () => (dispatch) => {

  request(`${baseUrl}/category`)
    .then(response => {
      // console.log("response of loadCategories()", response)
      dispatch(categoriesFetched(response.body));
    })
    .catch(console.error);
};