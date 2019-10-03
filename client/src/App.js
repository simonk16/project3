import React from 'react';
import { Router , Route, Switch } from "react-router";

import TProfile from './pages/Teacher/TProfile';



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" component={SignIn} />
        </Switch>
      </div>
    </Router>

  );

}



export default App;
