const initialState = {};

export default function articlesReducer(state = initialState, action) {
  // do something
  switch (action.type) {
    case "GET_ARTICLES":
      console.log("this is the reducer");
      console.log(action.payload);
      // return {
      //   state: action.payload,
      // };
      return (state.articles = action.payload);

    // default:
    //   return {
    //     state,
    //   };
  }
  console.log(state)
  return state;
}
