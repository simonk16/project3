import React, { Component } from "react";
// import API from "../utils/API";
// import { render } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
<<<<<<< HEAD
import Jumbotron from "./components/Jumbotron/jumbotron.js";
import Nav from "./components/Nav/nav.js";
import Footer from "./components/Footer/footer.js";

import TCard from "./components/TCard/TCard.js";
import { RosterBtn, StatsBtn, PlayBtn } from "./components/Buttons/buttons.js"
=======
import Jumbotron from "../../components/Jumbotron/jumbotron.js";
import Nav from "../../components/Nav/nav.js";
import Footer from "../../components/Footer/footer.js";
import TCard from "../../components/TCard/TCard";
import { RosterBtn, PlayBtn, StatsBtn } from "../../components/Form/form"

>>>>>>> master

class TProfile extends Component {
  render() {
    return (
      <div>
        <Nav />
        <br></br>
        <Container fluid>
          <Row fluid>
            <Col size="md-12">
              <Jumbotron>
<<<<<<< HEAD
                
                <br></br>
                <TCard />
=======
                <br></br>
                <TCard/>
>>>>>>> master
                <br></br>
                <Row>
                  <Col size="md-4">
                  <RosterBtn />
                  </Col>
                  <Col size="md-4">
                  <PlayBtn />
                  </Col>
                  <Col size="md-4">
                  <StatsBtn />
                  </Col>
                </Row>
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