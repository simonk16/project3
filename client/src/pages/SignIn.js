import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container, Row, Col } from '../components/Grid';
import Nav from "..components/Nav";
// import { Input, TextArea, FormBtn } from "../components/Form";
import CardSignIn from './components/CardSignIn';
import Footer from "../components/Footer";
import API from '../utils/API';

class SignIn extends Component {
  state = {
    user: {},
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.user) {
  //     API.postStudent({
  //       frstName: this.state.firstName,
  //       lastName: this.state.lastName,
  //       points: this.state.points,
  //       userName: this.state.Input,
  //       password: this.state.TextArea
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Row>
            <Col size="md-6">
              <CardSignIn />
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default SignIn;
