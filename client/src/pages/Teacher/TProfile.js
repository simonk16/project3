import React, { Component } from "react";
// import API from "../utils/API";
// import { render } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron/jumbotron";
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";

import TCard from "../../components/TCard/TCard";
import { RosterBtn, StatsBtn, PlayBtn } from "../../components/Form/form";

class TProfile extends Component {
  
  state = {
    students: [],
    selectedClass: ""
}




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
        <Footer />
      </div>
    );
  }
}

export default TProfile;