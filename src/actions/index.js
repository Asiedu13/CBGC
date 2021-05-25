import * as api from "../api/api";

export function getArticles() {
  return (dispatch) => {
    api.getArticles().then((resp) => {
      dispatch(getArticlesSucceeded(resp.data));
    });
  };
}

export function getArticlesSucceeded(resp) {
    console.log(resp);
  return {
    type: "GET_ARTICLES",
    payload: resp,
  };
}
