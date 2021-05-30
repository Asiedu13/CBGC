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
    payload: {
      articles: resp,
    },
  };
}

export function deletePost(id) {
  return (dispatch) => {
    api
      .deleteArticle(id)
      .then((resp) => {
        let msg = resp.data;
        dispatch(deletePostSucceeded(resp.data));
        dispatch(modifyDisplay({ comp: "success", msg }));
      })
      .catch((err) => console.log(err));
  };
}
export function deletePostSucceeded(resp) {
  return {
    type: "DELETE_ARTICLES_SUCCEEDED",
    payload: resp,
  };
}

// --------------- Mail -----------
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
    payload: { params },
  };
}

// ----------- AdminPage  ---------------
// display actions
export function modifyDisplay(comp) {
  return {
    type: "MOD_DISPLAY",
    payload: comp,
  };
}

// export function storeImage(params) {
//   let data = new FormData();
//   data.append("file", params, params.name);

//   return (dispatch) => {
//     axios
//       .post("http://localhost:5000/api/articles/img", data, {
//         headers: {
//           accept: "application/json",
//           "Accept-Language": "en-US,en;q=0.8",
//           "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
//         },
//       })
//       .then((response) => {
//         storeImageSucceeded(response);
//       })
//       .catch((error) => {
//         //handle error
//         console.log(error);
//       });
//   };
// }

export function storeImageSucceeded(resp) {
  return {
    type: "STORE_IMAGE_SUCCEEDED",
    payload: resp,
  };
}

export function postArticle(params) {
  return (dispatch) => {
    console.log(params);
    api
      .postArticle(params)
      .then((resp) => {
        console.log(resp);
        dispatch(postArticleSucceeded(resp.data));
        dispatch(modifyDisplay({ comp: "success", msg: resp.data }));
      })
      .catch((err) => dispatch(modifyDisplay("error")));
  };
}

export function postArticleSucceeded(resp) {
  console.log(resp);
  return {
    type: "POST_ARTICLE_SUCCEEDED",
    payload: resp,
  };
}
