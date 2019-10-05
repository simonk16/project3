import React from "react";
import '../../assets/css/cardsignin.css';
import { Input, TextArea, FormBtn, TeacherDrop, ClassDrop } from '../Form/form';

class CardSignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            loggedIn: false
        }
    }

    render() {

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
}

export default CardSignIn;