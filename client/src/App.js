import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRoter as Router } from "react-router-dom";
// import "fontawesome";
// import Student from './components/Student';
// import CardSignIn from './components/CardSignIn';
// import CardSignUp from './components/CardSignUp'


// import TProfile from './pages/Teacher/TProfile';
import TeachersLanding from './components/TeachersLanding/TeachersLanding';


// import Login from "./components/login/login"
// import Signup from "./components/signup/signup";

// class App extends Component{
//   render()
// }
const App = () => {
return(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/teacher" component={TeachersLanding} />
        </Switch>
    </BrowserRouter>
)
}



export default App;
