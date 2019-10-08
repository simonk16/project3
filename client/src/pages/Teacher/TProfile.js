import React, { Component } from "react";
// import API from "../utils/API";
// import { render } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
// import Jumbotron from "./components/Jumbotron/jumbotron.js";
import Jumbotron from "../../components/Jumbotron/jumbotron.js";

// import Nav from "./components/Nav/nav.js";
import Nav from "../../components/Nav/nav.js";

import TCard from "../../components/TCard/TCard.js";
// import { RosterBtn, StatsBtn, PlayBtn } from "./components/Form/form"
import { RosterBtn, StatsBtn, PlayBtn } from "../../components/Form/form"


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
                
                <br></br>
                <TCard />
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
      </div>
    );
  }
}

export default TProfile;