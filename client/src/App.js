import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import TeachersLanding from "./components/TeachersLanding/TeachersLanding"
import CardSignIn from './components/CardSignIn';
import CardSignUp from './components/CardSignUp';
import StudentsLanding from './components/studentsLanding/StudentsLanding';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CardSignIn} />
        <Route exact path="/signup" component={CardSignUp} />
        <Route exact path="/student" component={StudentsLanding} />
        <Route exact path="/teacher" component={TeachersLanding} />
      </Switch>
    </BrowserRouter>
  );

}






export default App;
