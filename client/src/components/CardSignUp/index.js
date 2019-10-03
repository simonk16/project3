import React from "react";
import './CardSignUp.css';
import { HeaderTwo, Name, Input, TextArea, FormBtn, TeacherDrop, ClassDrop } from '../Form/index.js';

function CardSignUp() {
    return (
        <div className="userCard2 textCenter">
            <HeaderTwo />
            <Name />
            <Input />
            <TextArea />
            <br></br>
            <TeacherDrop />
            <br></br>
            <ClassDrop />
            <br></br>
            <FormBtn />
        </div>
    );
}

export default CardSignUp;