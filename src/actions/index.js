import * as api from "../api/api";

// Asynchronous actions for articles
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

// Actions for Mail in the CounsellingPage

// Submit Mail

// Submit Mail asynchronous action
export function sendMail(params) {
  return (dispatch) => {
    console.log(params);
    api
      .sendMail(params)
      .then((resp) => {
        console.log(resp);
        dispatch(sendMailSucceeded(resp.data));
      })
      .catch((err) => console.log(err));
  };
}
export function sendMailSucceeded(params) {
  return {
    type: "SEND_MAIL_SUCCEEDED",
    payload: params,
  };
}