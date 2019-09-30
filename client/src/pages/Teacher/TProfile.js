import React, { Component } from "react";
// import API from "../utils/API";
// import {Link} from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron/jumbotron.js";
import Nav from "../../components/Nav/nav.js";
import Footer from "../../components/Footer/footer.js"

class TProfile extends Component {
  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Welcome!</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default TProfile;
