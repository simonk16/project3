import React from 'react';
// import "fontawesome";
// import Student from './components/Student';
// import CardSignIn from './components/CardSignIn';
// import CardSignUp from './components/CardSignUp'


import TProfile from './pages/Teacher/TProfile';


// import {BrowserRouter} from "react-router-dom";
// import {Switch, Route} from "react-router-dom";
// import Login from "./components/login/login"
// import Signup from "./components/signup/signup";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CardSignIn} />
        <Route exact path="/signup" component={CardSignUp} />
        <Route exact path="/signup" component={StudentsLanding} />
        <Route exact path="/teacher" component={TeachersLanding} />
      </Switch>
    </BrowserRouter>
  );

}
export default App;
