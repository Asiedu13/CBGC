const initialState = {
  
};

export default function articlesReducer(state = initialState, action) {
  // do something
  switch (action.type) {
    case "GET_ARTICLES":
      return (state.articles = action.payload);
    
    case "SEND_MAIL_SUCCEEDED":
      console.log(action.payload)
      let newState = Object.assign({}, state, action.payload);
      console.log(newState);
      return newState;
  
    
  }
  return state;
}

