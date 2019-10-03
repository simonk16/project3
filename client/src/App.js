import React from 'react';
<<<<<<< HEAD
// import logo from './logo.svg';
=======
import { Container, Row, Col } from './components/Grid/index.js';
import Nav from './components/Nav';
// import CardSignIn from './components/CardSignIn';
// import CardSignUp from './components/CardSignUp'
// import CardRoster from './components/CardRoster';
// import Footer from './components/Footer';
// import logo from './logo.svg';
import './App.css';
// import Jumbotron from "./components/Jumbotron";
// import Footer from "./components/Footer";
import TProfile from './pages/Teacher/TProfile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
>>>>>>> origin/master
import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router-dom";
// import Login from "./components/login/login"
// import Signup from "./components/signup/signup";
// import StudentsLanding from "./components/studentsLanding/StudentsLanding";
import TeachersLanding from "./components/TeachersLanding/TeachersLanding"
<<<<<<< HEAD
class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/student" component={StudentsLanding} />
          <Route exact path="/teacher" component={TeachersLanding} />
        </Switch>
    </BrowserRouter>
    );
  }
}
  




=======

function App() {
  return (
    <div></div>

  );

}
>>>>>>> origin/master
export default App;
