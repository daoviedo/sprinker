import React, { Component } from 'react';
import ScheduleStepper from '../Components/ScheduleStepper';
import DisplaySchedule from '../Components/DisplaySchedule';

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
            numValves: '',
            currentSchedule: null
        }
    }
    componentDidMount(){
        this.getSchedule();
    }
    delSchedule(){
        fetch('http://localhost:8080/schedule/cancel', {
            method: 'POST'
        })
        .then(this.setState({currentSchedule: 'none'}))
    }
    getSchedule(){
        fetch('http://localhost:8080/schedule', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            if(result.status === 500){
                this.setState({currentSchedule: 'none'})
            }
            else{
                this.setState({currentSchedule: result})
            }
        })
    }
    setSchedule(){
        fetch('http://localhost:8080/schedule', {
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
        .then(() => this.getSchedule())
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
    renderSchedule(){
        switch(this.state.currentSchedule){
            case null:
                return <div/>;
            case 'none':
                return <ScheduleStepper setSchedule={() => this.setSchedule()} handleNumChange={this.handleNumChange} handleDateChange={this.handleDateChange} handleChange={this.handleChange} state={this.state}/>;
            default:
                return <DisplaySchedule delSchedule={() => this.delSchedule()} displayData={this.state.currentSchedule}/>;
        }
    }
    render() {
        return (
            <div>   
                {this.renderSchedule()}
            </div>
        );
    }
}

export default Schedule;