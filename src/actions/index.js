import * as api from "../api/api";

// Asynchronous actions
export function getArticles() {
  return (dispatch) => {
    api.getArticles().then((resp) => {
      dispatch(getArticlesSucceeded(resp.data));
    });
  };
}

// Action Creator for getting articles
export function getArticlesSucceeded(resp) {
    console.log(resp);
  return {
    type: "GET_ARTICLES",
    payload: resp,
  };
}
