import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Typography } from '@material-ui/core';

class Manual extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    turnOn(valve){
        fetch('http://192.168.1.30:8080/on/' + valve,{
            method: "POST"
        })
        .then(res => console.log(res))
    }
    turnOff(valve){
        fetch('http://192.168.1.30:8080/off/' + valve,{
            method: "POST"
        })
        .then(res => console.log(res))
    }
    render() {
        return (
            <div style={{marginTop: 30, textAlign: 'center'}}>
                <Typography variant="h6">Valve 1</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button onClick={() => this.turnOn(1)} color="primary">ON</Button>
                        <Button onClick={() => this.turnOff(1)} color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 2</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button onClick={() => this.turnOn(2)} color="primary">ON</Button>
                        <Button onClick={() => this.turnOff(2)} color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 3</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button onClick={() => this.turnOn(3)} color="primary">ON</Button>
                        <Button onClick={() => this.turnOff(3)} color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 4</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button onClick={() => this.turnOn(4)} color="primary">ON</Button>
                        <Button onClick={() => this.turnOff(4)} color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 5</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button onClick={() => this.turnOn(5)} color="primary">ON</Button>
                        <Button onClick={() => this.turnOff(5)} color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 6</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button onClick={() => this.turnOn(6)} color="primary">ON</Button>
                        <Button onClick={() => this.turnOff(6)} color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 7</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button onClick={() => this.turnOn(7)} color="primary">ON</Button>
                        <Button onClick={() => this.turnOff(7)} color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 8</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button onClick={() => this.turnOn(8)} color="primary">ON</Button>
                        <Button onClick={() => this.turnOff(8)} color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
            </div>
        );
    }
}

export default Manual;