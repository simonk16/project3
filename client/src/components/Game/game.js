import React, { Component } from 'react';
import API from '../../utils/API'
import Axios from 'axios';
import '../../assets/css/game.css';
import Nav from '../Nav/nav';
import Footer from '../Footer/footer';

export default class game extends Component {
    state = {
        students: [],
        randIndex: 0,


        randomStudent: {},
        chosenStudents: [],
        points: "",
        selectedClass: ""

    }
    // componentDidMount() {
    //     this.getStudents();
    // }

    onChange = (e) => {
        // let oldState = this.state
        // oldState.selectedClass = e.target.value
        this.setState({ selectedClass: e.target.value }, () => {
            //const selectedClass = this.state.selectedClass
            const { selectedClass } = this.state;
            console.log(selectedClass)
            if (selectedClass === "3") {
                Axios.get("/api/students").then(response => {
                    // const oldState = this.state
                    // oldState.students = response.dataß
                    var studentsWithBool = response.data.map(stud => ({ ...stud, answerCorrect: false }))
                    this.setState({ students: studentsWithBool }, () => console.log(this.state.students))

                }).catch(err => {
                    console.log(err)
                })
            } else {

                Axios.get("/api/students/findStudentsByClass/" + selectedClass).then(response => {
                    console.log("LINE 24 " + response);
                    // const oldState = this.state
                    // oldState.students = response.data
                    // this.setState(oldState)
                    //mapping through the students array and getting all the data and then adding the answerCorrect parameter
                    var studentsWithBool = response.data.map(stud => ({ ...stud, answerCorrect: false }))
                    this.setState({ students: studentsWithBool }, () => console.log(this.state.students))

                }).catch(err => {
                    console.log(err)
                })
            }

        })

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
        // let studentsArr = this.state.students;
        const { students } = this.state;

        const getRandom = () => {
            const randomIndex = Math.floor(Math.random() * students.length)
            if(students.length === this.state.chosenStudents.length) {
                this.setState({
                    chosenStudents: []
                })
            }
            let isStudentPresent = false
            if (this.state.chosenStudents.length !== 0 ) {
                this.state.chosenStudents.forEach(element => {
                    if(element.id === students[randomIndex].id){
                        isStudentPresent = true
                    }
               });
            }

            if (isStudentPresent) {
                console.log("Already guesed right: ", students[randomIndex])
                return getRandom()
            } else {
                return randomIndex
            }
        }
        const randomIndex = getRandom()
        const item = students[randomIndex];

        //creating a new array with chosen students and setting them to the state
        let newChosenStudents = this.state.chosenStudents.concat(item)
        this.setState({
            chosenStudents : newChosenStudents
        })

        console.log(item, randomIndex, students)
        // console.log("line 26 code on game.js has chosen " + item.firstName);

        // let oldState = this.state;
        // oldState.randomStudent = item;
        // this.setState(oldState)
        this.setState({
            randomStudent: item,
            randomIndex: randomIndex
        })

    }

    correctFunc = () => {
        let thisStudentId = this.state.randomStudent.id
        // let thisStudentId = this.state.student[this.state.randomIndex].id
        Axios.put(`/api/students/${thisStudentId}`).then(updatedStudent => {
            let newStudentArr = this.state.students.map((student, i) => {
                if (i === this.state.randomIndex) {
                    console.log(typeof i, typeof this.state.randIndex)
                    let tempStud = student;
                    tempStud.points++
                    tempStud.answerCorrect = true
                    return tempStud
                } else {
                    return student
                }
            })
            this.setState({
                students: newStudentArr
            }, () => console.log(this.state.students))

            this.setState()
        }).catch(err => {
            console.log(err)
        })
    }




    render() {
        return (
            <div>

                <Nav />

                <div class="container">


                    <div class="card w-75">
                        <div class="card-body">
                            <form action="#">
                                <fieldset>
                                    <legend>Select Your Class</legend>
                                    <p>
                                        <br></br>
                                        <select onChange={this.onChange} name="selectedClass" id="myClass">
                                            <option value="default">Classes</option>
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
                                {this.state.students.map(student => { return <li>{student.firstName + " " + student.lastName + " " + student.points}</li> })}
                            </ul>
                        </div>
                    </div>

                    <div class="card w-75">
                        <div class="card-body">
                            <h5 class="card-title">Click a button to select a Student!</h5>
                            <p class="card-text">{this.state.randomStudent.firstName}  {this.state.randomStudent.lastName}</p>
                            <p class="card-text">{this.state.randomStudent.points}</p>
                            <br></br>

                            <a href="#" class="btn btn-primary" id="gameButton" onClick={this.randomSelect}>Select</a>
                            <a href="#" class="btn btn-primary" id="gameButton" onClick={this.correctFunc}>Right</a>

                        </div>
                    </div>


                </div>
            </div>

        )
    }
}
