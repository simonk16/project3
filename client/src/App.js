import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router-dom";
import Login from "./components/login/login"
import Signup from "./components/signup/signup";
import StudentsLanding from "./components/studentsLanding/StudentsLanding";
import TeachersLanding from "./components/TeachersLanding/TeachersLanding"
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
  




export default App;

{/* <Row>
          <Col size="md-6">
            <CardSignIn />
          </Col>
          <Col size="md-6">
            <CardSignUp />
          </Col>
        </Row> */}