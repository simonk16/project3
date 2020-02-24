import React, {Component} from "react";
// import API from "../utils/API";
// import {Link} from "react-router-dom";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron/jumbotron";
import { Input, TextArea, FormBtn } from "../components/Form/form";
import Nav from "../components/Nav/nav";

class Class extends Component {

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Class Name
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <Container>
              <Input />
              <TextArea />
            <FormBtn />
            </Container>
            {/* <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.book.synopsis}
              </p>
            </article> */}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Class;
