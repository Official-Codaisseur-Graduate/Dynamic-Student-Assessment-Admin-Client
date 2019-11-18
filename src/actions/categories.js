import request from "superagent";
import { baseURL } from '../constants/baseURL'

export const CATEGORIES_FETCHED = "CATEGORIES_FETCHED";

const categoriesFetched = categories => ({
  type: CATEGORIES_FETCHED,
  payload: categories
});

export const loadCategories = () => (dispatch) => {

  request(`${baseURL}/category`)
    .then(response => {
      dispatch(categoriesFetched(response.body));
    })
    .catch(console.error);
};