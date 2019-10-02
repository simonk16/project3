import React from "react";
import "../../assets/css/tcard.css";
import {TDrop1, FormBtn} from "../Form/index";
// import {Container, Row} from "../Grid/index"


function TCard() {
    return (
        <div className="tCard">
                <br></br>
                    <TDrop1/>
                    <br/>
                    <FormBtn/>
        </div>
    );
}

export default TCard;