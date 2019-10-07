import React from 'react';
<<<<<<< HEAD
import { Container, Row, Col } from './components/Grid/index.js';
import Nav from './components/Nav';
import CardSignIn from './components/CardSignIn';
import CardSignUp from './components/CardSignUp'
import Footer from './components/Footer';


// import logo from './logo.svg';
import Jumbotron from "./components/Jumbotron";
=======
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import "fontawesome";
// import Student from './components/Student';
// import CardSignIn from './components/CardSignIn';
// import CardSignUp from './components/CardSignUp'

>>>>>>> origin/master
import TProfile from './pages/Teacher/TProfile';
import SignUp from './pages/SignUp';

import CardSignIn from './components/CardSignIn';

// import Login from "./components/login/login"
// import Signup from "./components/signup/signup";

<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Login from "./components/login/login"
import Signup from "./components/signup/signup";
import StudentsLanding from "./components/studentsLanding/StudentsLanding";
import TeachersLanding from "./components/TeachersLanding/TeachersLanding";
import Game from './components/Game/game';
function App() {
  return (
    <div>

      <Game />
      

      {/* <Nav />
      <Container fluid>
        <Row>
          <Col size="md-6">
            <CardSignIn />
          </Col>
          <Col size="md-6">
            <CardSignUp />
          </Col>
        </Row>
      </Container>
      <Footer /> */}
    </div>
=======
>>>>>>> origin/master

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
