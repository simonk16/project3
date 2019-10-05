import React, { Component } from 'react'
import Axios from "axios"



export default class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            students: []
        }
    }

    
    
    componentDidMount = () => {
        Axios.get("/api/students/").then(response => {
            let oldState = this.state;
            console.log(response)
            oldState.students = response.data;
            this.setState(oldState)
        }).catch(err => {
            console.log(err);
        })
    }
    
    render() {
        return (
            <ul>
                {this.state.students.map(student => <li>{`${student.firstName} ${student.lastName}`}</li>)}
            </ul>
        )
    }
}
