import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import "fontawesome";
// import Student from './components/Student';
// import CardSignIn from './components/CardSignIn';
// import CardSignUp from './components/CardSignUp'

import TProfile from './pages/Teacher/TProfile';
// import TeachersLanding from './components/TeachersLanding/TeachersLanding';


// import Login from "./components/login/login"
// import Signup from "./components/signup/signup";

// class App extends Component{
//   render()
// }
const App = () => {
    return (
        <div>
      <TProfile />
    </div>
    );
}



export default App;
