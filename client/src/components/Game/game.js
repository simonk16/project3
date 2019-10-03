import React, { Component } from 'react';
import API from '../../utils/API'

export default class game extends Component {
    state = {
        students: [],
        randomStudent: ""
    }
    componentDidMount() {
        this.getStudents();
    }
    getStudents = async () => {
        const response = await API.getStudents();
        console.log(response.data);
        this.setState({
            students: response.data
        })
        console.log("line 17: " + this.state.students)
    } 

    randomSelect = () => {
        let studentsArr = this.state.students;
        const keys = Object.keys(studentsArr);
        const randomIndex = keys[Math.floor(Math.random() * keys.length)];
        const item = studentsArr[randomIndex];
        console.log("line 26 code on game.js has chosen " + item.firstName)
        let oldState = this.state
        oldState.randomStudent = item.firstName
        this.setState(oldState)
        
    }


    render() {
        return (
            <div>
                <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">Click to button to select a Student!</h5>
                        <p class="card-text">{this.state.randomStudent}</p>
                        <a href="#" class="btn btn-primary" onClick={this.randomSelect}>Button</a>
                    </div>
                </div>
            </div>
        )
    }
}
