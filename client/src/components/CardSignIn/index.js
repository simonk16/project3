import React from "react";
import '../../assets/css/cardsignin.css';
import { Input, TextArea, FormBtn, TeacherDrop, ClassDrop } from '../Form/form';


function CardSignIn() {
    return (
        <div className="userCard">
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

export default CardSignIn;