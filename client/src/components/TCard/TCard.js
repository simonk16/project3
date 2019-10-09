import React from "react";
import "../../assets/css/tcard.css";
import {TDrop1, FormBtnTeacherPage } from "../Form/form";
// import {Container, Row} from "../Grid/index"


function TCard() {
    return (
        <div className="tCard">
                <br></br>
                    <TDrop1/>
                    <br/>
                    <FormBtnTeacherPage/>
        </div>
    );
}

export default TCard;