import React from "react";
import "../../assets/css/tcard.css";
import {TDrop1, SubmitBtn } from "../Form/form";
// import {Container, Row} from "../Grid/index"


function TCard() {
    return (
        <div className="tCard">
                <br></br>
                    <TDrop1/>
                    <br/>
                    <SubmitBtn/>
        </div>
    );
}

export default TCard;