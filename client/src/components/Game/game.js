import React, { Component } from 'react';
import API from '../../utils/API'
import Axios from 'axios';

export default class game extends Component {
    state = {
        students: [],
        randomStudent: {},
        chosenStudents: [],
        points: "",
        selectedClass: "" 

    }
    // componentDidMount() {
    //     this.getStudents();
    // }

    onChange = (e) => {
        let oldState = this.state
        oldState.selectedClass = e.target.value
        this.setState(oldState)
        console.log(this.state.selectedClass)  
        const selectedClass = this.state.selectedClass
        console.log(selectedClass)
        if (selectedClass === "3"){
            Axios.get("/api/students").then(response =>{
                const oldState = this.state
                oldState.students = response.data
                this.setState(oldState)
                console.log(this.state.students)
           }).catch(err => {
               console.log(err)
           })
        } else {

            Axios.get("/api/students/findStudentsByClass/" + selectedClass).then(response => {
                console.log("LINE 24 " +response);
                const oldState = this.state
                oldState.students = response.data
                this.setState(oldState)
                console.log(this.state.students)
            }).catch(err => {
                console.log(err)
            })
        }

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
        console.log("line 26 code on game.js has chosen " + item.firstName);

        let oldState = this.state;
        oldState.randomStudent = item;
        this.setState(oldState)

    }

    correctFunc = () => {
        let thisStudentId = this.state.randomStudent.id
        Axios.put(`/api/students/${thisStudentId}`).then(updatedStudent => {
            const oldState = this.state;
            oldState.points = updatedStudent.points
        }).catch(err => {
            console.log(err)
        })
    }

    wrongFunc = () => {
        let newScore = this.state.points - 1;
        this.setState({
            points: newScore
        });

    }


    render() {
        return (
            <div class="container">
                <div class="card w-75">
                    <div class="card-body">
                        <form action="#">
                            <fieldset>
                                <legend>Selecting Your Class</legend>
                                <p>
                                    <br></br>
                                    <select onChange ={this.onChange} name="selectedClass" id="myClass">
                                        <option value="default">Select..</option>
                                        <option name="selectedClass" value="2">Mon/Wed</option>
                                        <option name="selectedClass" value="1">Tue/Thu</option>
                                        <option name="selectedClass" value="3">Saturday</option>
                                    </select>
                                </p>
                            </fieldset>
                        </form>

                    </div>
                </div>

                <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">List of Students</h5>
                            <ul>
                            {this.state.students.map(student => {
                                return <li>{student.firstName}</li>
                            })}   
                            </ul>                     
                    </div>
                </div>

                <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">Click to button to select a Student!</h5>
                        <p class="card-text">{this.state.randomStudent.firstName}  {this.state.randomStudent.lastName}</p>
                        <p class="card-text">{this.state.randomStudent.points}</p>

                        <a href="#" class="btn btn-primary" onClick={this.randomSelect}>Select</a>
                        <a href="#" class="btn btn-primary" onClick={this.correctFunc}>Right</a>
                        <a href="#" class="btn btn-primary" onClick={this.wrongFunc}>Wrong</a>


                    </div>
                </div>

            </div>
        )
    }
}
