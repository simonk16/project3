import React from 'react';
import { Container, Row, Col } from './components/Grid/index.js';
import logo from './logo.svg';
// import './App.css';
// import Student from './components/Student';
import Nav from './components/Nav';
import CardSignIn from './components/CardSignIn';
import CardSignUp from './components/CardSignUp'
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Nav />
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
      <Footer />
    </div>
  );

}



export default App;
