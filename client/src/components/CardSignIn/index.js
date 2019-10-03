import React from "react";
import './style.css';
import { Header, Input, TextArea, FormBtn } from '../Form/index.js';


function CardSignIn() {
    return (
        <div className="userCard">
            <Header />
            <Input />
            <TextArea />
            <br></br>
            <FormBtn />
        </div>
    );
}

export default CardSignIn;