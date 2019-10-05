import React, { Component } from 'react';
import API from '../../utils/API'
import Axios from 'axios';

export default class game extends Component {
    state = {
        students: [],
        randomStudent: "",
        chosenStudents: [],
        points: ""

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
        console.log("line 26 code on game.js has chosen " + item.firstName);

        this.setState({
            randomStudent: item.firstName,
            lastName: item.lastName,
            points: item.points
        });


    }

    correctFunc = () => {
        let newScore = this.state.points + 1;
        this.setState({
            points: newScore
        });
        Axios.put()
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
                        <h5 class="card-title">Select your Class by ClassId</h5>
                        <form>
                            <div class="form-group">
                                <label htmlFor="formGroupExampleInput">Enter Class Id below</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />

                                <input class="btn btn-primary" type="submit" value="Submit" />

                            </div>

                        </form>
                    </div>
                </div>

                



                <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">List of Students</h5>
                        <p class="card-text">{this.state.randomStudent}</p>
                        <p class="card-text">{this.state.lastName}</p>
                        <p class="card-text">{this.state.points}</p>

                    </div>
                </div>
                
                <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">Click to button to select a Student!</h5>
                        <p class="card-text">{this.state.randomStudent}</p>
                        <p class="card-text">{this.state.lastName}</p>
                        <p class="card-text">{this.state.points}</p>

                        <a href="#" class="btn btn-primary" onClick={this.randomSelect}>Select</a>
                        <a href="#" class="btn btn-primary" onClick={this.correctFunc}>Right</a>
                        <a href="#" class="btn btn-primary" onClick={this.wrongFunc}>Wrong</a>


                    </div>
                </div>

            </div>
        )
    }
}
