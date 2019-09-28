import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import {Input, TextArea, FormBtn} from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Nav/>
        <Jumbotron/>
        <Input/>
        <TextArea/>
        <FormBtn/>
        <Footer/>
    </div>
  );
  
}



export default App;
