import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import Nav from "../components/Nav/nav";
import { Container, Row, Col } from "../components/Grid";
// import { RosterBtn, PlayBtn, StatsBtn } from "../components/Form/form";
import ClassStats from "../components/Stats/stats";
import "../assets/css/stats.css";



class Stats extends Component {
    render() {
        return (
            <div>
                <Nav />
                <br></br>
                <Container fluid>
                    <Row fluid >
                            <Jumbotron>
                                <ClassStats />
                            
                            </Jumbotron>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Stats;