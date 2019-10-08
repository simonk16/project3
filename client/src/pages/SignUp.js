import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from '../components/Grid';
// import { Input, TextArea, FormBtn } from "../components/Form";
import CardSignUp from '../components/CardSignUp/index';
import API from '../utils/API';

class SignUp extends Component {
  state = {
    user: {},
  };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.user) {
//       API.postStudent({
//         frstName: this.state.firstName,
//         lastName: this.state.lastName,
//         points: this.state.points,
//         userName: this.state.Input,
//         password: this.state.TextArea
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <CardSignUp />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SignUp;