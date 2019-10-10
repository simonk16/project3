import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";


import TProfile from './pages/Teacher/TProfile';
import CardSignIn from './components/CardSignIn';
import SignUp from './pages/SignUp';
import game from './components/Game/game';
import Test from './components/Test';



// import Login from "./components/login/login"
// import Signup from "./components/signup/signup";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CardSignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/teacher" component={TProfile} />
        <Route exact path="/game" component={game} />
        <Route exact path="/test" component={Test} />
      </Switch>
      
    </BrowserRouter>
  );

}
export default App;
