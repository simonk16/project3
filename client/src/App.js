import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";


import TProfile from './pages/Teacher/TProfile';
import CardSignIn from './components/CardSignIn';
import SignUp from './pages/SignUp';
// import Game from "./pages/Game";
import Stats from "./pages/Stats";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CardSignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/teacher" component={TProfile} />
        {/* <Route exact path="/stats" component={Stats} /> */}
      </Switch>
    </BrowserRouter>
  );

}
export default App;
