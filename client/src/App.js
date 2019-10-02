import React from 'react';
import { Container, Row, Col } from './components/Grid/index.js';
import Nav from './components/Nav';
import CardSignIn from './components/CardSignIn';
import CardSignUp from './components/CardSignUp'
import Footer from './components/Footer';


// import logo from './logo.svg';
import Jumbotron from "./components/Jumbotron";
import TProfile from './pages/Teacher/TProfile';


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

  );

}



export default App;
