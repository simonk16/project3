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

<<<<<<< HEAD

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

=======
// class App extends Component{
//   render()
// }
const App = () => {
    return (
        <div>
      <TProfile />
    </div>
    );
>>>>>>> 459b053ad251fcb77689ee53cf8ca024194d5dbf
}
export default App;
