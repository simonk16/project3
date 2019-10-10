import React, { Component } from "react";
// import API from "../utils/API";
// import { render } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
// import Jumbotron from "./components/Jumbotron/jumbotron.js";
import Jumbotron from "../../components/Jumbotron/jumbotron.js";

// import Nav from "./components/Nav/nav.js";
import Nav from "../../components/Nav/nav.js";

import TCard from "../../components/TCard/TCard.js";
import VishuHooks from "../../components/VishuHooks";



class TProfile extends Component {
  render() {
    return (
      <div>
        <Nav />
        <br></br>
        {/* <Container fluid> */}
          <Row fluid>
            <Col size="md-12">
              <Jumbotron>
                
                <br></br>
                <TCard />
                <br></br>
              </Jumbotron>
            </Col>
          </Row>
        {/* </Container> */}
       
      </div>
    );
  }
}

export default TProfile;