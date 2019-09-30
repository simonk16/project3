import React from "react";
import './CardSignUp.css';
import { Input, TextArea, FormBtn, TeacherDrop, ClassDrop } from '../Form/index.js';

function CardSignUp() {
    return (
        <div className="userCard2">
            <Input />
            <TextArea />
            <br></br>
            <TeacherDrop />
            <br></br>
            <ClassDrop />
            {/* <ClassRadio />
            <OccupationRadio /> */}
            <br></br>
            <FormBtn />
        </div>
    );
}

export default CardSignUp;