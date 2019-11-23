import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Typography, Grid, Paper } from '@material-ui/core';
import Grain from '@material-ui/icons/Grain';
import WbCloudy from '@material-ui/icons/WbCloudy';
import WbSunny from '@material-ui/icons/WbSunny';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            mockrain: null,
            weather: {},
            curTime: new Date().toLocaleString(),
            loaded: false
        }
    }
    componentDidMount(){
        this.checkMockStatus();
        this.getWeather();
        setInterval( () => {
            this.setState({
              curTime : new Date().toLocaleString()
            })
        },1000)
    }
    getWeather(){
        fetch('http://192.168.1.30:8080/weather', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => this.setState({weather : result, loaded: true}))
    }
    checkMockStatus(){
        fetch('http://192.168.1.30:8080/mockrain', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => this.setState({mockrain: result}))
    }
    changeMockStatus(){
        fetch('http://192.168.1.30:8080/mockrain', {
            method: 'POST'
        })
        .then(res => res.json())
        .then(result => this.setState({mockrain: result}))
    }
    displaySwitch(){
        if(this.state.mockrain === null){
            return <div/>
        }
        else{
            return  <FormControlLabel
                        control={
                            <Switch
                            checked={this.state.mockrain}
                            onChange={() => this.changeMockStatus()}
                            />
                        }
                        label="Emulate Rain"
                    />;
            }
    }
    displayIcon(name){
        switch(name){
            case 'cloudy':
                return <WbCloudy style={{fontSize: 70, marginLeft: 20}}/>;
            case 'sunny':
                return <WbSunny style={{fontSize: 70, marginLeft: 20}}/>;
            case 'rainy':
                return <Grain style={{fontSize: 70, marginLeft: 20}}/>;
            default:
                return <WbSunny style={{fontSize: 70, marginLeft: 20}}/>;
        }
    }
    render() {
        if(this.state.loaded === false){
            return (<div/>);
        }
        else{
            return (
                <div>
                    <Paper style={{margin: 'auto', width: 500, marginTop: 40}}>
                        <Typography variant='h5' style={{marginLeft: 20, paddingTop: 20}}>Houston, TX</Typography>
                        <Typography style={{marginLeft: 20}}>{this.state.curTime}</Typography>
                        <Typography style={{marginLeft: 20, marginBottom: 20}}>{this.state.weather.icon}</Typography>
                        <Grid container style={{paddingBottom: 20}}>
                            <Grid item xs>
                                <div style={{display: 'flex'}}>
                                {this.displayIcon(this.state.weather.icon)}
                                <Typography variant="h3" style={{marginTop: 12.5, marginLeft: 10}}>{Math.round(this.state.weather.temperature)}&#176;F</Typography>
                                </div>
                                
                            </Grid>
                            <Grid item xs>
                                <Typography style={{marginTop: 5}} variant="body2">{"Precipitation: " + (this.state.weather.precipProbability)*100 + '%'}</Typography>
                                <Typography variant="body2">{"Humidity: " + (this.state.weather.humidity)*100 + '%'}</Typography>
                                <Typography variant="body2">{"Wind: " + Math.round(this.state.weather.windSpeed) + ' mph'}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    <br/>
                    <div style={{textAlign: 'center'}}>
                        {this.displaySwitch()}
                    </div> 
                </div>
            );
        }   
    }
}

export default Home;