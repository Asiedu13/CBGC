const initialState = {};

export default function articlesReducer(state = initialState, action) {
  // do something
  switch (action.type) {
    case "GET_ARTICLES":
      return (state.articles = action.payload);
  }
  return state;
}
