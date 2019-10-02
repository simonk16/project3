import React, { Component } from 'react';
import API from '../../utils/API'

export default class game extends Component {
    state = {
        students: []
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
    }
    render() {
        return (
            <div>
                <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>
        )
    }
}
