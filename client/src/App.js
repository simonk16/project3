import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import "fontawesome";
// import Student from './components/Student';
// import CardSignIn from './components/CardSignIn';
// import CardSignUp from './components/CardSignUp'

import TProfile from './pages/Teacher/TProfile';
import CardSignIn from './components/CardSignIn';
import SignUp from './pages/SignUp';


// import Login from "./components/login/login"
// import Signup from "./components/signup/signup";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CardSignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/teacher" component={TProfile} />
      </Switch>
    </BrowserRouter>
  );

}
export default App;
