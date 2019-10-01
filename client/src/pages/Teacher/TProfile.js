import React, { Component } from "react";
// import API from "../utils/API";
// import {Link} from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron/jumbotron.js";
import Nav from "../../components/Nav/nav.js";
import Footer from "../../components/Footer/footer.js";
import TeachersLanding from "../../components/TeachersLanding/TeachersLanding";
import TCard from "../../components/TCard/TCard.js"

class TProfile extends Component {
  render() {
    return (
      <div>
        <Nav />
        <br></br>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <TeachersLanding />
                <br></br>
                <TCard/>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default TProfile;
