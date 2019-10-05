import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav/nav";
import { Input, TextArea, FormBtn } from "../components/Form/form";
import Footer from "../components/Footer/footer";
import Jumbotron from "../components/Jumbotron/jumbotron"


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
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Nav />
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
              />
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                type="radio"
                name="title"
                placeholder="Student or Teacher (required)"
              />
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="What is your class? (required)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>

          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default SignIn;
