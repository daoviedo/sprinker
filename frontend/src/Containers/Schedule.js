import React, { Component } from 'react';
import ScheduleStepper from '../Components/ScheduleStepper';
import { Button } from '@material-ui/core';

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
            duration: '',
            numValves: ''
        }
    }
    setSchedule(){
        fetch('http://192.168.1.9:8080/schedule', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                startTime: this.state.startTime.toTimeString().split(" ")[0].substring(0,5),
                duration: parseInt(this.state.duration),
                days: this.dayArray(),
                stations: parseInt(this.state.numValves)
            })
        })
        .then(result => console.log(result))
    }
    dayArray(){
        let tempArr = []
        if(this.state.mon === true){
            tempArr.push('Mon')
        }
        if(this.state.tue === true){
            tempArr.push('Tue')
        }
        if(this.state.wed === true){
            tempArr.push('Wed')
        }
        if(this.state.thu === true){
            tempArr.push('Thu')
        }
        if(this.state.fri === true){
            tempArr.push('Fri')
        }
        if(this.state.sat === true){
            tempArr.push('Sat')
        }
        if(this.state.sun === true){
            tempArr.push('Sun')
        }
        return tempArr;
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.checked });
    }
    handleDateChange = date => {
        this.setState({startTime: date})
    }
    handleNumChange = name => event => {
        this.setState({[name]: event.target.value});
    }
    render() {
        console.log(this.state.scheduleDays)
        const newDay = new Date();
        console.log(newDay.toTimeString().split(" ")[0].substring(0,5))
        return (
            <div>
                <ScheduleStepper handleNumChange={this.handleNumChange} handleDateChange={this.handleDateChange} handleChange={this.handleChange} state={this.state}/>
                <Button onClick={() => this.setSchedule()}>Test</Button>
            </div>
        );
    }
}

export default Schedule;