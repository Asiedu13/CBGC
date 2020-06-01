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

import React from 'react';
import ReactDom from 'react-dom';
// import App from './App';
// import App2 from './App2';
// import App3 from './App3';
// import App4 from './App4'
// import App5 from './App5';
// import App6 from './App6';
// import Meme from './Meme';
// import App7 from './App7';
import App8 from './App8';
// import './css/main.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHome, faAngleRight, faUser, faNewspaper, faHeart, faShoppingCart, faInfo, faQuoteLeft, faQuoteRight, faCloud, faArrowCircleRight, faArrowCircleLeft, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faHome, faAngleRight, faUser, faNewspaper, faHeart, faShoppingCart, faInfo, faQuoteLeft, faQuoteRight, faCloud, faArrowCircleRight,  faArrowCircleLeft, faLongArrowAltLeft )


ReactDom.render(<App8 />, document.getElementById('root'));