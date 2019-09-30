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
            let oldState = this.state
            oldState.students = response.data;
            this.setState(oldState)
        }).catch(err => {
            console.log(err);
        })
    }
    
    render() {
        return (
            <div>
                {this.state.students.map(student => {
                    return (<li>{student}</li>)
                })}
            </div>
        )
    }
}
