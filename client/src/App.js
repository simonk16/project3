import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import "fontawesome";
import StudentsLanding from './components/studentsLanding/StudentsLanding';
import CardSignIn from './components/CardSignIn/index';
import CardSignUp from './components/CardSignUp/index'

// import Stats from "./pages/Stats";
import TProfile from './pages/Teacher/TProfile';


// import Login from "./components/login/login"
// import Signup from "./components/signup/signup";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CardSignIn} />
        <Route exact path="/signup" component={CardSignUp} />
        <Route exact path="/signup" component={StudentsLanding} />
        <Route exact path="/teacher" component={TProfile} />
      </Switch>
    </BrowserRouter>
  );

}
export default App;
