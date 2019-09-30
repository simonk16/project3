import React from 'react';
<<<<<<< HEAD
=======
// import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import TProfile from './pages/Teacher/TProfile';
>>>>>>> origin/master

import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router-dom";
import Login from "./components/login/login"
import Signup from "./components/signup/signup";
import StudentsLanding from "./components/studentsLanding/StudentsLanding";
import TeachersLanding from "./components/TeachersLanding/TeachersLanding"
function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/student" component={StudentsLanding} />
        <Route exact path="/teacher" component={TeachersLanding} />
      </Switch>
    </BrowserRouter>
=======
    <div>
      <Jumbotron>
      <TProfile />
      </Jumbotron>
      <Footer />
    </div>
>>>>>>> origin/master
  );
  
}



export default App;
