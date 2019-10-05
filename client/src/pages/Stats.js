import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import Nav from "../components/Nav/nav";
import Footer from "../components/Footer/footer";
import { Container, Row, Col } from "../components/Grid";
import { RosterBtn, PlayBtn, StatsBtn } from "../components/Form/form";
import ClassStats from "../components/Stats/stats";

class Stats extends Component {
    render() {
        return (
            <div>
                <Nav />
                <br></br>
                <Container fluid>
                    <Row fluid>
                        <Col size="md-12">
                            <Jumbotron>
                                <ClassStats />
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

export default Stats;