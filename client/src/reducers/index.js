const initialState = {
  articles: [],
  isLoading: false,
  comp: "Posts",
  creating: false,
};

export default function articlesReducer(state = initialState, action) {
  // do something
  let newState;
  switch (action.type) {
    case "GET_ARTICLES":
      return {
        ...state, 
        isLoading: false, 
        articles: action.payload.articles, 
        }
        
      // return (state.articles = action.payload);

    case "SEND_MAIL_SUCCEEDED":
      console.log(action.payload);
      newState = Object.assign({}, state, action.payload);
      console.log(newState);
      return newState;

    case "MOD_DISPLAY":
      newState = Object.assign({}, state, action.payload);
      console.log(newState);
      return newState;

    case "POST_ARTICLE_SUCCEEDED":
      newState = Object.assign({}, state, action.payload);
      console.log(newState);
      return newState;

      
    case "DELETE_ARTICLE_SUCCEEDED":
      newState = Object.assign({}, state, action.payload);
      console.log(newState);
      return newState;

  }
  return state;
}
