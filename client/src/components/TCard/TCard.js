import React from "react";
import "../../assets/css/tcard.css";
import {ClassDrop, FormBtn} from "../Form/index";
// import {Container, Row} from "../Grid/index"


function TCard() {
    return (
        <div className="tCard">
            {/* <Container>
                <Row className="justify-content-md-center"> */}
                    <ClassDrop/>
                    <br/>
                    <FormBtn/>
                {/* </Row>
            </Container> */}
        </div>
    );
}

export default TCard;