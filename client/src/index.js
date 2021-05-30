// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();

import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import articlesReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  faCheckSquare,
  faCoffee,
  faHome,
  faMailBulk,
  faAngleRight,
  faPlus,
  faUser,
  faNewspaper,
  faHeart,
  faShoppingCart,
  faInfo,
  faQuoteLeft,
  faQuoteRight,
  faCloud,
  faArrowCircleRight,
  faArrowCircleLeft,
  faBars,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faArrowRight,
  faEnvelope,
  faArrowLeft,
  faCopyright,
  faAddressBook,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
// import {faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(
  fab,
  faTrash,
  faAddressBook,
  faCheckSquare,
  faCoffee,
  faMailBulk,
  faCopyright,
  faHome,
  faAngleRight,
  faEnvelope,
  faPlus,
  faBars,
  faUser,
  faNewspaper,
  faHeart,
  faShoppingCart,
  faInfo,
  faQuoteLeft,
  faQuoteRight,
  faCloud,
  faArrowCircleRight,
  faArrowCircleLeft,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faArrowRight,
  faArrowLeft,
  faTimes
);
const store = createStore(articlesReducer, applyMiddleware(thunk));
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  const NextApp = require('./App').default;
  ReactDom.render(<Provider store={store}><NextApp /></Provider>, document.getElementById('root'));

  module.hot.accept("./reducers", () => {
    const nextRootReducer = require("./reducers").default;
    store.replaceReducer(nextRootReducer);
  });
}
