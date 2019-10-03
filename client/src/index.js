import React from 'react';
import './assets/css/reset.css'
import App from './App';
import TProfile from "./pages/Teacher/TProfile";
import SignIn from "./pages/SignIn";
import Class from "./pages/Class";
import Student from "./pages/Student/Student";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
