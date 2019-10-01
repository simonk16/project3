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
        <Container fluid>
          <Nav />
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <TeachersLanding />
              </Jumbotron>
              </Col>
            </Row>
            <Row>
              <Col size="md-4">
                <TCard />
              </Col>
            </Row>
            <Footer />
      </Container>
        );
      }
    }
    
    export default TProfile;
