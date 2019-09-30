import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import TProfile from './pages/Teacher/TProfile';
import Login from "./components/Login/login";

function App() {
  return (
    <div>

      <Login />
      {/* <Jumbotron>
      <TProfile />
      </Jumbotron>
      <Footer /> */}
    </div>
  );
  
}



export default App;
