import React from "react";
import "../../assets/css/tcard.css";
import {ClassDrop, FormBtn} from "../Form/index";
import {Container, Row, Col} from "../Grid/index"


function TCard() {
    return (
        <div className="tCard">
            <Container fluid>
                <Row fluid>
                    <Col size="md-12">
                    <ClassDrop/>
                    <FormBtn/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TCard;