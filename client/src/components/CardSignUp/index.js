import React from "react";
import '../../assets/css/CardSignUp.css';
import { Input, TextArea, FormBtn, TeacherDrop, ClassDrop } from '../Form/form';

function CardSignUp() {
    return (
        <div className="userCard2">
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