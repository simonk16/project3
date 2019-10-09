import React from "react";
import "../../assets/css/tcard.css";
// import { RosterBtn, StatsBtn, PlayBtn } from "./components/Form/form"
import { RosterBtn, StatsBtn, PlayBtn } from "../../components/Form/form"
import { Col, Row } from "../Grid/index";
import { Link } from "react-router-dom";



function TCard() {
    return (
        <div className="tCard">
            <Row >
                  <Col size="md-4" className="rosterbtn">
                  {/* <Link to="/roster"> */}
                  <RosterBtn />
                  {/* </Link> */}
                  </Col>
                  <Col size="md-4">
                  <Link to="/game">
                  <PlayBtn />
                  </Link>
                  </Col>
                  <Col size="md-4" className="statsbtn">
                  <Link to="/standings">
                  <StatsBtn />
                  </Link>
                  </Col>
                </Row>
        </div>
    );
}

export default TCard;