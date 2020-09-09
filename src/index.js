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
import {
  faCheckSquare,
  faCoffee,
  faHome,
  faAngleRight,
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
  faSadCry,
  faSadTear,
  faHeartBroken,
  faLowVision,
  faAppleAlt,
} from "@fortawesome/free-solid-svg-icons";

// import {fabGoogle } from '@fortawesome/free-brands-svg-icons'
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faHome,
  faArrowRight,
  faArrowLeft,
  faAngleRight,
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
  faSadCry,
  faSadTear,
  faHeartBroken,
  faLowVision,
  faAppleAlt,


);

ReactDom.render(<App />, document.getElementById("root"));
