import React, { Component } from "react";
// import API from "../utils/API";
// import { render } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
// import Jumbotron from "./components/Jumbotron/jumbotron.js";
import Jumbotron from "../../components/Jumbotron/jumbotron.js";
import { Link } from "react-router-dom";

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
                    <Link to="/roster">
                  <RosterBtn />
                  </Link>
                  </Col>
                  <Col size="md-4">
                  <Link to="/game">
                  <PlayBtn />
                  </Link>
                  </Col>
                  <Col size="md-4">
                  <Link to="/stats">
                  <StatsBtn />
                  </Link>
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