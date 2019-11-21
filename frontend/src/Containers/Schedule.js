import React, { Component } from 'react';
import ScheduleStepper from '../Components/ScheduleStepper';

class Schedule extends Component {
    constructor(props){
        super(props);
        this.state = {
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false,
            sun: false,
            scheduleDays: [],
            startTime: null,
            Duration: '',
            numValves: ''
        }
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.checked });
    }
    handleDateChange = date => {
        this.setState({startTime: date})
    }
    render() {
        return (
            <div>
                <ScheduleStepper handleDateChange={this.handleDateChange} handleChange={this.handleChange} state={this.state}/>
            </div>
        );
    }
}

export default Schedule;