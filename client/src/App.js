import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import TProfile from './pages/Teacher/TProfile';

function App() {
  return (
    <div>
      <Jumbotron>
      <TProfile />
      </Jumbotron>
      <Footer />
    </div>
  );
  
}



export default App;
