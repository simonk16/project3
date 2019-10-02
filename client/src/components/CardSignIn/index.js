import React from "react";
import './style.css';
import { Input, TextArea, FormBtn, TeacherDrop, ClassDrop } from '../Form/index.js';


function CardSignIn() {
    return (
        <div className="userCard">
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

export default CardSignIn;